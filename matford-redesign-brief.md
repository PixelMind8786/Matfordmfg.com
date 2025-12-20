# Matford Manufacturing Website Redesign Brief
## Anti-Gravity Builder Instructions

---

## PROJECT OVERVIEW

**Client:** Matford Manufacturing Ltd  
**Website:** matfordmfg.com  
**Project Type:** Complete static website redesign using existing assets  
**Output:** Static HTML/CSS/JS files for 123-reg hosting  

**Objective:** Transform the existing Matford Manufacturing website into a modern, professional B2B industrial website that conveys precision engineering excellence, reliability, and fast turnaround capability. The redesign should match the quality standards established in the PixelMind Web Designs portfolio while maintaining all existing content and leveraging current assets.

---

## ANTI-GRAVITY INSTRUCTIONS

### File Structure Awareness
Read and utilise the existing project structure. The following assets and files are already present and should be reused:

```
/
├── index.html
├── about.html
├── manufacturing.html
├── services.html
├── contact.html
├── images/
│   ├── matford_logo.svg              ← Primary logo (REUSE)
│   ├── NQA ISO 9001 Logo - UKAS.jpg  ← ISO certification badge (REUSE)
│   └── heros/
│       ├── part3_circle.png          ← Supply chain visual (REUSE)
│       ├── part4_circle.png          ← Assembly kit visual (REUSE)
│       └── part5_circle.png          ← Mori CNC machines (REUSE)
├── video/
│   └── NLX_2500_cut_1m55s_to_2m15s.mp4  ← Hero background video (REUSE)
└── css/
    └── (existing styles to be replaced)
```

### Asset Usage Instructions
- **DO** preserve all image paths and filenames
- **DO** maintain the video as an optional hero element or feature showcase
- **DO** use the SVG logo throughout header and footer
- **DO** prominently display the ISO 9001 certification badge
- **DO** incorporate the circular hero images into service/capability sections
- **DO NOT** delete or rename any existing asset files

---

## COLOUR PALETTE

### Primary Colours (Extracted from current design + industrial enhancement)

| Colour Name | Hex Code | Usage |
|-------------|----------|-------|
| **Matford Navy** | `#1a2332` | Primary backgrounds, headers, footer |
| **Steel Blue** | `#2d4a6f` | Secondary backgrounds, cards, accents |
| **Industrial Orange** | `#e67e22` | CTAs, highlights, accent elements |
| **Precision Silver** | `#bdc3c7` | Body text on dark, borders, dividers |
| **Clean White** | `#ffffff` | Card backgrounds, text on dark |
| **Workshop Grey** | `#34495e` | Secondary text, subtle backgrounds |
| **Success Green** | `#27ae60` | ISO badge accents, positive indicators |

### Colour Application Rules
- Navy (#1a2332) for hero sections, header, footer
- Steel Blue (#2d4a6f) for alternating content sections
- Orange (#e67e22) ONLY for primary CTAs and key highlights
- White cards on dark section backgrounds for contrast
- Silver/grey text on dark backgrounds for readability

---

## TYPOGRAPHY

### Font Stack
```css
/* Primary Headings */
font-family: 'Montserrat', 'Segoe UI', sans-serif;
font-weight: 700;

/* Body Text */
font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
font-weight: 400;

/* Technical/Data */
font-family: 'Roboto Mono', 'Consolas', monospace;
```

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 3.5rem / 56px | 700 | 1.1 |
| H2 (Section) | 2.5rem / 40px | 700 | 1.2 |
| H3 (Cards) | 1.5rem / 24px | 600 | 1.3 |
| Body | 1rem / 16px | 400 | 1.6 |
| Caption | 0.875rem / 14px | 400 | 1.5 |

---

## PAGE STRUCTURE & CONTENT

### Navigation (All Pages)
```
[Logo]                    [Home] [About] [Manufacturing] [Services] [Contact]    [CTA: Request Quote]
```
- Sticky header with transparent-to-solid transition on scroll
- Mobile hamburger menu
- Phone number in header utility bar: +44 1922 622 293

---

### PAGE 1: HOME (index.html)

#### Hero Section
- **Background:** Video (NLX_2500_cut_1m55s_to_2m15s.mp4) with dark overlay (70% opacity)
- **Headline:** "Precision Turning. Fast Turnarounds."
- **Subheadline:** "Without sacrificing tolerance. ISO 9001 certified CNC machining from Walsall, UK."
- **Primary CTA:** "Request a Free Quote" → contact.html
- **Secondary CTA:** "View Capabilities" → manufacturing.html
- **Trust Badge:** ISO 9001 UKAS logo positioned bottom-right of hero

#### Why Choose Matford Section
Three-column feature cards with icons:
1. **One Partner. Every Process.**
   - Icon: Chain link / handshake
   - "Machine, finish, heat-treat, deliver – one purchase order, one contact, zero hassle."
   
2. **Speed Powered by Mori CNC**
   - Icon: Speedometer / CNC machine
   - "Mori NLX 2500 turning centres. Prototypes and small batches in days, not weeks."
   
3. **Assembly Kits, Ready to Go**
   - Icon: Package / kit box
   - "Pre-counted, labelled hardware kits timed to your build schedule."

#### Industries Served Section
- Automotive
- Agricultural
- Commercial Vehicles
- General Engineering

#### ISO 9001 Trust Banner
Full-width banner with ISO logo and text: "ISO 9001:2015 Certified | Certificate No. 26080 | Quality Management You Can Rely On"

#### CTA Section
Dark background, centred text:
- "Need precision parts on a tight deadline?"
- "Get your free quote within 24 hours"
- Button: "Contact Our Team"

---

### PAGE 2: ABOUT (about.html)

#### Hero Section
- Background: Steel blue gradient or workshop image
- Headline: "Engineering Excellence Since 2009"
- Subheadline: "A West Midlands precision machining partner built on quality and reliability"

#### Our Story Section
Content about the company history, values, and approach:
- Established 2009 in Walsall, West Midlands
- Family-run precision engineering business
- Focus on customer service and meeting tight deadlines
- ISO 9001 certified quality management

#### Our Values (Three cards)
1. **Precision** - Tolerances that meet your exact specifications
2. **Reliability** - Delivery schedules you can depend on
3. **Partnership** - We succeed when you succeed

#### Team/Facility Section
- Workshop imagery
- Equipment capabilities
- Location context (West Midlands engineering heritage)

#### Certifications & Approvals
- ISO 9001:2015 (Certificate No. 26080)
- Blue chip company approvals
- Full material traceability

---

### PAGE 3: MANUFACTURING (manufacturing.html)

#### Hero Section
- Headline: "Advanced CNC Machining Capabilities"
- Subheadline: "Mori NLX 2500 turning centres delivering precision at speed"
- Use circular machine image (part5_circle.png) as feature

#### Equipment Section
**Mori NLX 2500 Turning Centres**
- Multi-axis CNC turning
- Milling and drilling in single setup
- Lights-out automation capability
- Parallel scheduling for faster delivery

#### Materials We Work With
Grid of material cards:
- Mild Steel
- Stainless Steel
- Aluminium
- Brass
- Bronze
- Plastics/Nylon
- Exotic alloys (on request)

#### Capabilities Matrix
| Capability | Specification |
|------------|---------------|
| Max Turning Diameter | [specify] |
| Max Length | [specify] |
| Typical Tolerances | ±0.01mm |
| Batch Sizes | 1 - 10,000+ |
| Lead Times | From 3 days |

#### Quality Control
- In-process inspection
- Final inspection
- Full certification and traceability
- Material test certificates available

---

### PAGE 4: SERVICES (services.html)

#### Hero Section
- Headline: "Complete Machining Services"
- Subheadline: "From single prototypes to production runs, finished and delivered"

#### Service Cards (Use circular images)

**1. Precision CNC Turning**
Image: part5_circle.png
- Bespoke machined components
- Fasteners and fixings
- Custom specifications

**2. Supply Chain Solutions**
Image: part3_circle.png
- Single point of contact
- Finish, heat-treat, plate
- Managed delivery schedules

**3. Assembly Kits**
Image: part4_circle.png
- Matched hardware sets
- Bar coded packaging
- Customer-specific labelling

**4. Fastener Solutions**
- Standard and bespoke fasteners
- Nuts, bolts, studs, pins
- Special thread forms

**5. Emergency Breakdown Service**
- 24-hour availability
- Rapid replacement components
- Maintenance support

**6. Logistics & Packaging**
- Dedicated packaging solutions
- Bar coding capability
- Global supplier network

#### Process Section
1. Enquiry & Quote
2. Design Review
3. Material Sourcing
4. CNC Machining
5. Finishing & Treatment
6. Inspection & Certification
7. Delivery

---

### PAGE 5: CONTACT (contact.html)

#### Hero Section
- Headline: "Get In Touch"
- Subheadline: "Request a quote or discuss your project requirements"

#### Contact Details Card
```
📍 Address:
2 Short Street
Premier Business Park
Walsall, WS2 9EB
United Kingdom

📞 Phone: +44 1922 622 293
📧 Email: info@matfordmfg.com
📠 Fax: +44 1922 723461

🕐 Opening Hours:
Monday – Thursday: 07:00 – 16:30
Friday: 07:00 – 11:00
Weekends & Bank Holidays: Closed
```

#### Contact Form
Fields:
- Name (required)
- Company
- Email (required)
- Phone
- Project Type (dropdown: Quote Request, Technical Enquiry, Emergency Service, General Enquiry)
- Message (textarea)
- Submit button: "Send Enquiry"

#### Map Section
Embedded Google Map showing location

#### Quick Response Promise
"We aim to respond to all enquiries within 24 hours during business days."

---

## FOOTER (All Pages)

```
[Logo]

CONTACT                    QUICK LINKS              CERTIFICATIONS
2 Short Street            Home                      [ISO 9001 Badge]
Premier Business Park     About                     Certificate No. 26080
Walsall WS2 9EB          Manufacturing
United Kingdom           Services
                         Contact
+44 1922 622 293
info@matfordmfg.com

────────────────────────────────────────────────────────────
© 2025 Matford Manufacturing Ltd. All rights reserved.
Company Reg: 06834261 | VAT: [Number]
```

---

## UI COMPONENTS

### Buttons
```css
/* Primary CTA */
.btn-primary {
  background: #e67e22;
  color: #ffffff;
  padding: 14px 32px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #d35400;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 126, 34, 0.3);
}

/* Secondary CTA */
.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 12px 30px;
}
```

### Cards
- White background on dark sections
- Subtle shadow: `box-shadow: 0 4px 20px rgba(0,0,0,0.1)`
- Border radius: 8px
- Hover lift effect with increased shadow

### Section Patterns
- Alternating dark (#1a2332) and light (#f8f9fa) sections
- Consistent padding: 80px 0 (desktop), 60px 0 (mobile)
- Max content width: 1200px, centred

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Desktop | 1200px+ | Full layout, 3+ columns |
| Tablet | 768px - 1199px | 2 columns, adjusted spacing |
| Mobile | < 768px | Single column, hamburger nav |

---

## PERFORMANCE REQUIREMENTS

- Lazy load images below the fold
- Video: autoplay, muted, loop, playsinline
- Video fallback: static image for mobile/slow connections
- Compress all images (WebP with PNG fallback)
- Minify CSS/JS for production
- Target: < 3s page load on 3G

---

## SEO REQUIREMENTS

### Meta Tags (per page)
```html
<title>[Page] | Matford Manufacturing - Precision CNC Turning, Walsall</title>
<meta name="description" content="[Page-specific 155 chars]">
<meta name="keywords" content="CNC turning, precision machining, fasteners, Walsall, West Midlands, ISO 9001">
```

### Structured Data
- LocalBusiness schema
- Organization schema
- Service schema for each service page

### Page Titles
- Home: "Precision CNC Turning & Machining | Matford Manufacturing"
- About: "About Us | Matford Manufacturing - ISO 9001 Certified"
- Manufacturing: "CNC Manufacturing Capabilities | Matford Manufacturing"
- Services: "Machining Services & Solutions | Matford Manufacturing"
- Contact: "Contact Us | Matford Manufacturing, Walsall"

---

## DESIGN INSPIRATION KEYWORDS

- Industrial premium
- Engineering precision
- B2B professional
- Clean minimalist
- Dark mode industrial
- Trust-building
- Technical confidence

**Reference Sites (style only):**
- DMG Mori corporate
- Sandvik Coromant
- Proto Labs
- Xometry

---

## DELIVERABLES CHECKLIST

- [ ] index.html (homepage)
- [ ] about.html
- [ ] manufacturing.html
- [ ] services.html
- [ ] contact.html
- [ ] css/styles.css (main stylesheet)
- [ ] js/main.js (interactions, mobile menu)
- [ ] Preserved /images/ folder with all original assets
- [ ] Preserved /video/ folder
- [ ] Favicon (generate from logo if not present)
- [ ] robots.txt
- [ ] sitemap.xml

---

## NOTES FOR ANTI-GRAVITY

1. **Preserve existing files** - Work within the current directory structure
2. **Static output** - No server-side processing, pure HTML/CSS/JS
3. **123-reg compatible** - Standard web hosting, no special requirements
4. **Mobile-first** - Ensure excellent mobile experience
5. **Video optimisation** - Include poster frame and loading states
6. **Form handling** - Use Formspree or similar for contact form, or simple mailto: fallback
7. **Consistency** - Match PixelMind design quality standards

---

*Brief prepared for Anti-Gravity website builder*
*Project: Matford Manufacturing Redesign*
*Date: December 2024*
