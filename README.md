# Blessed Hope Daycare Center

**Where small hands learn big things.**

A licensed home childcare on Joyce Street in Orange, NJ.
Built as part of the IGRIS factory's local-business batch.

🔗 **Live:** https://blessed-hope-daycare.vercel.app
☎️ **Tours:** (973) 678-0098
📍 **Address:** Joyce Street, Orange, NJ 07050
🕐 **Hours:** Mon–Fri · 7 AM to 6 PM

---

## Aesthetic

| | |
|---|---|
| Lineage | Eric Carle picture-book gouache · Montessori classroom card · early-learning workbook · nursery-rhyme palette |
| Palette | Milk cream · cocoa brown · peach · sage green · butter yellow · terracotta · sky · blush |
| Type | Fraunces (display, opsz axis) · Nunito (body) · Caveat (handwritten script) |
| Signature moment | Hand-drawn flower **bloom** opening in the hero (8 back petals + 8 front + butter center + freckles) with swaying leaves and floating sparkles |
| Motion language | Petal bloom-pop · gentle sway · soft float · heart-soft pulse · crayon-rule divider |

Distinct from siblings: warm, organic, hand-drawn. Nothing schematic
about it. Where Orange Central Supply reads as engineering paper and
Claude's reads as a chrome garage at night, Blessed Hope reads as a
sunlit kitchen with a child's drawing on the fridge.

---

## Sections

1. **Nav** — hand-drawn flower mark, tour CTA with heart-soft beat
2. **Hero** — "Where small hands learn big things" + bloom signature
3. **Welcome** — small house, big room to grow + licensed/CPR/insured cues
4. **Programs** — 4 age groups (Infants, Toddlers, Preschool, Pre-K) with ratios
5. **DayRhythm** — 10-step daily flow from drop-off to pickup
6. **Care** — 6 daily promises (licensed, CPR, ratios, notes, food, outside)
7. **Visit** — contact card grid + hand-drawn house illustration
8. **Footer** — bloom mark, contact, licensed badge, crayon rule

---

## Stack

- **Next.js 16.2** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **Motion**
- **Lenis**
- **Fraunces · Nunito · Caveat** (via `next/font`)

---

## Local development

```bash
npm install
npm run dev    # http://localhost:3000
```

---

## Deployment

```bash
vercel pull --yes --environment production
vercel build --prod
vercel deploy --prebuilt --prod
```

---

Grown by IGRIS · with care.
