import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import { Party } from "../../types/Party";
import styles from "./RsvpForm.module.css";
import classNames from "classnames";

const RsvpForm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
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
      if (party.confirmed) {
        navigate("/rsvp/thank-you");
      } else {
        navigate("/rsvp/sorry");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
    handleInputChange("notes", event.target.value);
  };

  return (
    <div className={styles.card}>
      {!(token === "thank-you") && !(token === "sorry") && error && (
        <p className={styles.error}>{error}</p>
      )}
      <form
        onSubmit={handleSubmit}
        className={classNames(styles.form, {
          [styles["form--disabled"]]: loading || !!error,
        })}
        onKeyDown={handleKeyDown}
      >
        <input
          type="text"
          style={{ fontSize: "larger", color: "#ccc" }}
          placeholder="Party Name"
          value={party?.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          disabled={loading || !!error}
          readOnly
        />
        <label style={{ width: "100%", textWrap: "nowrap" }}>
          Party Size:{""}
          <input
            style={{ width: "100%" }}
            type="number"
            placeholder="Party Size"
            value={party?.size}
            max={party?.max}
            min={1}
            onChange={(e) => handleInputChange("size", Number(e.target.value))}
            disabled={loading || !!error}
          />
        </label>

        <textarea
          placeholder="Notes"
          value={party?.notes}
          onChange={handleDescriptionChange}
          disabled={loading || !!error}
          rows={1}
        />
        <div className={styles.radio}>
          <ul>
            <li>
              <input
                type="radio"
                id="confirm-option"
                name="confirmation"
                checked={party?.confirmed === true}
                onChange={() => handleInputChange("confirmed", true)}
                disabled={loading || !!error}
              />
              <label htmlFor="confirm-option">Confirm Attendance</label>
              <div className={styles.check}>
                <div className={styles.inside}></div>
              </div>
            </li>
            <li>
              <input
                type="radio"
                id="decline-option"
                name="confirmation"
                checked={party?.confirmed === false}
                onChange={() => handleInputChange("confirmed", false)}
                disabled={loading || !!error}
              />
              <label htmlFor="decline-option">Decline Invitation</label>
              <div className={styles.check}>
                <div className={styles.inside}></div>
              </div>
            </li>
          </ul>
        </div>
        <button type="submit" disabled={loading || !!error}>
          Submit RSVP
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
