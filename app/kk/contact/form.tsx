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
        throw Error( "\u0421\u04B1\u0440\u0430\u0443\u0434\u044B \u0436\u0456\u0431\u0435\u0440\u0443 \u043C\u04AF\u043C\u043A\u0456\u043D \u0431\u043E\u043B\u043C\u0430\u0434\u044B");
    setState("success");
    form.reset();
}
catch (x) {
    setError( "\u0421\u04B1\u0440\u0430\u0443\u0434\u044B \u0436\u0456\u0431\u0435\u0440\u0443 \u043C\u04AF\u043C\u043A\u0456\u043D \u0431\u043E\u043B\u043C\u0430\u0434\u044B");
    setState("error");
} } return <><form className="form" onSubmit={submit}><label>{"\u0410\u0442\u044B\u04A3\u044B\u0437 "}<Input name="name" required maxLength={120}/></label><label>{"\u0416\u04B1\u043C\u044B\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0434\u044B\u049B \u043F\u043E\u0448\u0442\u0430\u04A3\u044B\u0437 "}<Input name="email" type="email" required maxLength={200}/></label><label>{"\u04B0\u0439\u044B\u043C "}<Input name="organization" maxLength={200}/></label><label>{"\u049A\u0430\u043D\u0434\u0430\u0439 \u043C\u0456\u043D\u0434\u0435\u0442\u0442\u0456 \u0442\u0430\u043B\u049B\u044B\u043B\u0430\u0439\u043C\u044B\u0437? "}<Textarea name="message" required maxLength={3000} placeholder="Объект, бастапқы жүйелер және қазір тексеру қиын болып тұрған мәселе"/></label><label style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">{"\u0421\u0430\u0439\u0442 "}<Input name="website" tabIndex={-1} autoComplete="off"/></label><label className="check"><Checkbox name="consent" required/> <span>{"\u0421\u04B1\u0440\u0430\u0443\u044B\u043C\u0430 \u0436\u0430\u0443\u0430\u043F \u0431\u0435\u0440\u0443 \u04AF\u0448\u0456\u043D \u043A\u04E9\u0440\u0441\u0435\u0442\u0456\u043B\u0433\u0435\u043D \u0434\u0435\u0440\u0435\u043A\u0442\u0435\u0440\u0434\u0456 \u04E9\u04A3\u0434\u0435\u0443\u0433\u0435 \u043A\u0435\u043B\u0456\u0441\u0435\u043C\u0456\u043D. "}<a href="/kk/privacy">{"\u0414\u0435\u0440\u0435\u043A\u0442\u0435\u0440\u0434\u0456 \u04E9\u04A3\u0434\u0435\u0443 \u0448\u0430\u0440\u0442\u0442\u0430\u0440\u044B"}</a>.</span></label><Button type="submit" disabled={state === "loading"} style={{ background: "#006342", color: "white", maxWidth: 230 }}>{state === "loading" ? "\u0416\u0456\u0431\u0435\u0440\u0456\u043B\u0443\u0434\u0435\u2026" : "\u0421\u04B1\u0440\u0430\u0443\u0434\u044B \u0436\u0456\u0431\u0435\u0440\u0443"}</Button></form>{state === "success" && <p className="notice" role="status">{"\u0421\u04B1\u0440\u0430\u0443\u044B\u04A3\u044B\u0437 \u0441\u0430\u049B\u0442\u0430\u043B\u0434\u044B. \u0416\u043E\u0431\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u0441\u044B \u043E\u043D\u044B\u043C\u0435\u043D \u0442\u0430\u043D\u044B\u0441\u0430 \u0430\u043B\u0430\u0434\u044B."}</p>}{state === "error" && <p role="alert" className="notice">{error}</p>}</>; }
