"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
export default function ContactForm() { const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle"); const [error, setError] = useState(""); async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const form = e.currentTarget; const data = new FormData(form); setState("loading"); try {
    const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), organization: data.get("organization"), message: data.get("message"), website: data.get("website"), consent: data.has("consent") }) });
    const v = await res.json() as {
        error?: string;
    };
    if (!res.ok)
        throw Error( "Unable to send your request");
    setState("success");
    form.reset();
}
catch (x) {
    setError( "Unable to send your request");
    setState("error");
} } return <><form className="form" onSubmit={submit}><label>{"Your name "}<Input name="name" required maxLength={120}/></label><label>{"Work email "}<Input name="email" type="email" required maxLength={200}/></label><label>{"Organisation "}<Input name="organization" maxLength={200}/></label><label>{"What would you like to discuss? "}<Textarea name="message" required maxLength={3000} placeholder="The object, source systems and what is difficult to verify today"/></label><label style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">{"Website "}<Input name="website" tabIndex={-1} autoComplete="off"/></label><label className="check"><Checkbox name="consent" required/> <span>{"I consent to the processing of the data provided to respond to this request. "}<a href="/en/privacy">{"Data processing terms"}</a>.</span></label><Button type="submit" disabled={state === "loading"} style={{ background: "#006342", color: "white", maxWidth: 230 }}>{state === "loading" ? "Sending\u2026" : "Send request"}</Button></form>{state === "success" && <p className="notice" role="status">{"Your request has been saved for the project team to review."}</p>}{state === "error" && <p role="alert" className="notice">{error}</p>}</>; }
