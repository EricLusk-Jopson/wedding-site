// src/RSVP.tsx
import React, { useState, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Party } from "../../types/Party";
import { supabase } from "../../supabase/supabaseClient";

const RSVP: React.FC = () => {
  const { token } = useParams();
  const [party, setParty] = useState<Party | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetchParty();
    } else {
      setLoading(false);
      setError("No token provided");
    }
  }, [token]);

  const fetchParty = async () => {
    const { data, error } = await supabase
      .from("parties")
      .select("*")
      .eq("token", token)
      .single();
    if (error || !data) {
      setError("Invalid token. Please check your email for the correct link.");
    } else {
      setParty(data as Party);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("parties")
      .update({
        name: party?.name,
        size: party?.size,
        notes: party?.notes,
        confirmed: party?.confirmed,
      })
      .eq("token", token);

    if (error) {
      console.error("Error updating party:", error);
    } else {
      // Redirect to thank you page
      window.location.href = party?.confirmed ? "/thank-you" : "/sorry";
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
        <p>Please check your email for the correct RSVP link.</p>
      </div>
    );
  }

  if (!party) return null;

  return (
    <div>
      <h2>RSVP for {party.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Party Name"
          value={party.name}
          onChange={(e) => setParty({ ...party, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Party Size"
          value={party.size}
          onChange={(e) => setParty({ ...party, size: Number(e.target.value) })}
        />
        <textarea
          placeholder="Notes"
          value={party.notes || ""}
          onChange={(e) => setParty({ ...party, notes: e.target.value })}
        />
        <label>
          <input
            type="radio"
            checked={party.confirmed === true}
            onChange={() => setParty({ ...party, confirmed: true })}
          />
          Confirm
        </label>
        <label>
          <input
            type="radio"
            checked={party.confirmed === false}
            onChange={() => setParty({ ...party, confirmed: false })}
          />
          Decline
        </label>
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
};

export default RSVP;
