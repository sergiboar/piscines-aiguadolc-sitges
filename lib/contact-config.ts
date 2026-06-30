export const contactConfig = {
  companyName: "Piscines Aiguadolç",
  phoneDisplay: "633 232 510",
  phoneHref: "tel:+34633232510",
  whatsappNumber: "34633232510",
  email: "piscinesaiguadolç@gmail.com",
  serviceArea: "Sitges y rodalies / Costa del Garraf",
  siteUrl: "https://piscinesaiguadolc.com",
  leadSubject: "Nuevo lead desde Piscines Aiguadolç",
};

export const whatsappHref = (text = "Hola, quiero solicitar una valoración para una piscina en Sitges") =>
  `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
