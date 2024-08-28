import React, { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Party } from "../../types/Party";
import { supabase } from "../../supabase/supabaseClient";
import styles from "./Rsvp.module.css";

const RSVP: React.FC = () => {
  const { token } = useParams();
  const [party, setParty] = useState<Party>({} as Party);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetchParty();
    } else {
      setLoading(false);
      setError("Please check your inbox for an RSVP link.");
    }
  }, [token]);

  const fetchParty = async () => {
    const { data, error } = await supabase
      .from("parties")
      .select("*")
      .eq("token", token)
      .single();
    if (error || !data) {
      setError(
        "We could not verify your RSVP link. Please check your inbox for an RSVP link."
      );
    } else {
      setParty(data as Party);
    }
    setLoading(false);
  };

  const handleInputChange = (
    field: keyof Party,
    value: string | number | boolean
  ) => {
    setParty((prevParty) => {
      return { ...prevParty, [field]: value };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!party) return;

    const { error } = await supabase
      .from("parties")
      .update({
        name: party.name,
        size: party.size,
        notes: party.notes,
        confirmed: party.confirmed,
      })
      .eq("token", token);

    if (error) {
      console.error("Error updating party:", error);
    } else {
      // Redirect to thank you page
      window.location.href = party.confirmed ? "/thank-you" : "/sorry";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Join Us</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Party Name"
            value={party?.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            disabled={loading || !!error}
          />
          <input
            type="number"
            placeholder="Party Size"
            value={party?.size}
            onChange={(e) => handleInputChange("size", Number(e.target.value))}
            disabled={loading || !!error}
          />
          <textarea
            placeholder="Notes"
            value={party?.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            disabled={loading || !!error}
          />
          <div className={styles.radio}>
            <label>
              <input
                type="radio"
                name="confirmation"
                checked={party?.confirmed === true}
                onChange={() => handleInputChange("confirmed", true)}
                disabled={loading || !!error}
              />
              Confirm
            </label>
            <label>
              <input
                type="radio"
                name="confirmation"
                checked={party?.confirmed === false}
                onChange={() => handleInputChange("confirmed", false)}
                disabled={loading || !!error}
              />
              Decline
            </label>
          </div>
          <button type="submit" disabled={loading || !!error}>
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
