"use client";

import { useState } from "react";
import { contactConfig } from "@/lib/contact-config";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      setStatus("error");
      setMessage(data.error ?? "No se ha podido enviar la solicitud. Llámanos o escríbenos por WhatsApp.");
      return;
    }
    event.currentTarget.reset();
    setStatus("success");
    setMessage("Solicitud enviada. Te contactaremos para valorar la piscina o el exterior.");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="hidden" name="origen" value={contactConfig.companyName} />
      {[["nombre", "Nombre"], ["telefono", "Teléfono"], ["email", "Email"], ["zona", "Zona"]].map(([id, label]) => (
        <label key={id}>{label}<input name={id} id={id} required={id !== "email"} /></label>
      ))}
      <label>Tipo de servicio<select name="tipoServicio" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Construcción de piscina</option><option>Reforma de piscina</option><option>Renovación de acabados</option><option>Diseño exterior con piscina</option></select></label>
      <label>Construcción o reforma<select name="modalidad" defaultValue="Construcción"><option>Construcción</option><option>Reforma</option><option>No lo tengo claro</option></select></label>
      <label>Estado actual de la piscina si existe<input name="estadoActual" /></label>
      <label>Plazo aproximado<input name="plazo" /></label>
      <label>Mensaje<textarea name="mensaje" rows={5} required /></label>
      <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando..." : "Enviar solicitud"}</button>
      {message && <p className={status === "error" ? "formError" : "formSuccess"}>{message}</p>}
      <p className="micro">Destino configurado: {contactConfig.email}. También puedes llamar o enviar WhatsApp.</p>
    </form>
  );
}
