import { defineCollection, z } from "astro:content";

const boardCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      position: z.string(),
      cover: image(),
      coverAlt: z.string(),
      email: z.string(),
      facebook: z.string(),
    }),
});

const weeksCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      dia: z.string(),
      cover: image(),
      coverAlt: z.string(),
      encargado: z.string(),
      correoEncargado: z.string(),
    }),
});

const involvedCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      intro: z.string(),
      club: z.string().optional(),
      contiene: z.array(z.string()),
      compromiso: z.array(z.string()),
      ima: image(),
      imag: image(),
      CA: z.string().optional(),
      Texto: z.string().optional(),
    }),
});

export const collections = {
  about: boardCollection,
  weeks: weeksCollection,
  involved: involvedCollection,
};
