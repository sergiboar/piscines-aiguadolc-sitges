import { NextResponse } from "next/server";
import { contactConfig } from "@/lib/contact-config";

const requiredFields = ["nombre", "telefono", "zona", "tipoServicio", "modalidad", "mensaje"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, string> | null;
  if (!body) return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });

  const missing = requiredFields.filter((field) => !String(body[field] ?? "").trim());
  if (missing.length) return NextResponse.json({ error: "Faltan campos obligatorios para valorar la solicitud." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? contactConfig.email;
  if (!apiKey || !from || !to) {
    return NextResponse.json({ error: "El envío de formularios no está configurado. Usa WhatsApp o llamada directa." }, { status: 503 });
  }

  const lines = [
    ["Nombre", body.nombre],
    ["Teléfono", body.telefono],
    ["Email", body.email],
    ["Zona", body.zona],
    ["Tipo de servicio", body.tipoServicio],
    ["Construcción o reforma", body.modalidad],
    ["Estado actual", body.estadoActual],
    ["Plazo aproximado", body.plazo],
    ["Mensaje", body.mensaje],
    ["Origen", contactConfig.companyName],
  ].map(([label, value]) => `<p><strong>${label}:</strong> ${String(value ?? "").replace(/[<>]/g, "")}</p>`).join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject: contactConfig.leadSubject, html: `<h1>${contactConfig.leadSubject}</h1>${lines}` }),
  });

  if (!response.ok) return NextResponse.json({ error: "No se ha podido enviar el formulario. Prueba por WhatsApp o teléfono." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
