# Antigravity prompt: convert Lonavala Gateway into a Rajasthan travel site

Paste everything below this line into Antigravity with the lonavalagateway.com project open.

---

## Your task

This project is the Next.js site currently live at lonavalagateway.com. It is an independent travel agency site about Lonavala: information and enquiry assistance only, no online booking or payment.

Convert it into a Rajasthan travel site. Keep the layout, components, styling, page types, section order, forms and navigation structure exactly as they are. Change only the content: text, data records, slugs, SEO metadata, image references and alt text. When you finish, no page, meta tag, alt text, WhatsApp message, JSON-LD block or sitemap entry should still mention Lonavala, Khandala, Pawna, Mumbai airport, Pune or any other Maharashtra place, except the office address in the config below.

All replacement content is supplied in this prompt. It was collected by crawling the current site, the Ananta hotels information site and Google Maps on 10 Nov 2026. Use it as given. Where something is not supplied, follow the "missing data" rule in the rules section instead of inventing it.

## Site config (edit these values before running if they should change)

```
BRAND_NAME        = Rajasthan Gateway
BRAND_TAGLINE     = by Vidhi Tour & Travel
LEGAL_ENTITY      = Vidhi Tour & Travel            (keep current value)
GST_NO            = 27AACPS1497B1ZQ                (keep current value)
PHONE / WHATSAPP  = +91 88937 97155                (keep current value)
EMAIL             = info@lonavalagateway.com       (keep until the domain changes)
OFFICE_ADDRESS    = keep the current Mumbai office address
HOURS             = Mon – Sun : 9:00 AM – 8:00 PM  (keep current value)
WHATSAPP_PREFILL  = Hi, I want help with hotel/tour enquiry in Rajasthan.
```

Put these in one place (an existing site config/constants file if there is one) and reference them everywhere, so a later change is a single edit.

## How to work

1. First read the codebase and find where content lives: data files for hotels, villas, tours, camping, cabs and things-to-do; hardcoded strings in page and component files; `metadata` / `generateMetadata` exports; `sitemap`, `robots`, `opengraph-image`, `twitter-image`; JSON-LD; the WhatsApp link builder; and `/public/images`.
2. Tell me briefly what you found and the list of files you will change, then proceed.
3. Replace data records first, then page copy, then SEO metadata, then images, then policy pages.
4. Finish with the verification steps at the end of this prompt.

## Rules

- Do not change layout, component structure, CSS/Tailwind classes, spacing, section order, form fields or routes' folder structure. Text length should stay close to the current text in each slot so nothing overflows.
- Detail-page slugs change to the ones given below. Remove the old Lonavala slugs. If old URLs are indexed, add redirects from each old detail URL to its list page (`/hotels`, `/villas`, `/tours`).
- Keep the independent-agency positioning everywhere: enquiry only, no booking, no payment, no guaranteed price or availability, no affiliation with any hotel, villa, camp, attraction or government body. The current metadata says "Book ..." in many titles and descriptions; change those to "Enquire about ..." / "Information on ..." wording.
- No ratings or reviews anywhere. Remove star ratings, review counts, "Rated X★ by N+ guests" text, testimonial-style claims and any rating fields from cards, detail pages, metadata and JSON-LD (no `aggregateRating`). If the rating element is part of a card layout, remove the element cleanly so the card spacing still looks right.
- Missing data: never invent room counts, bedroom counts, prices, timings or distances. If a field has no value below, hide that element for that record, or use the neutral wording the site already uses ("Multiple Bedrooms", "May vary", "Available on enquiry").
- Tone: informative, the same as the current Lonavala Gateway pages. Describe what a place is, where it is, what is nearby and what a traveller should check before going. No sales language, no superlatives ("best", "finest", "unforgettable"), no offers, no urgency, no promises. Keep the site's existing caution lines ("details may vary", "for information only", "verify before proceeding") on every page where they appear now.
- "Independent Travel Agency" must stay visible exactly where the current site shows it: the top bar ("GST Registered Travel Agency"), the logo lockup label "Independent Travel Agency", the header sub-line, the hero area of the home page, the footer about text, the About page and both disclaimer blocks. Add the phrase "an independent travel agency" to the meta description of the Home, About and Contact pages too.
- Images: do not hotlink or copy photos from the Ananta site, the hotels' own sites or Google Maps. Replace each Lonavala image with a Rajasthan placeholder at the same path pattern and dimensions, keep a list of every image slot that needs a real licensed photo in `IMAGES_TODO.md` (slot, page, suggested subject), and update all alt text now. The existing Unsplash image on Things To Do can be swapped for a Rajasthan Unsplash image.
- Write naturally. Do not copy sentences from other websites; the copy below is original and can be used as is.

## Global text replacements

| Slot | New text |
|---|---|
| Logo / brand | {BRAND_NAME} / {BRAND_TAGLINE} |
| Header sub-line | Independent Travel Agency \| Travel Information & Enquiry Assistance in Rajasthan |
| Nav items | Home, Hotels & Resorts, Villas & Havelis, Local Tours, Desert Camping, Cabs & Transfers, Things To Do, About Us, Contact Us (same routes as now) |
| Footer about | We are an independent travel agency offering assistance with hotels, resorts, villas, havelis and local tours across Rajasthan. |
| Footer quick link "Villas in Lonavala" | Villas in Rajasthan |
| Footer services | Hotel Enquiries, Villa & Haveli Stays, Local Tours, Car Rental, Holiday Packages |
| Disclaimer blocks | Same wording, with "Lonavala Gateway" → {BRAND_NAME} |
| Copyright line | unchanged apart from brand |

## Home page

- Meta title: Rajasthan Hotels, Resorts, Villas & Local Tours | {BRAND_NAME}
- Meta description: {BRAND_NAME} is an independent travel agency offering information and enquiry assistance for hotels, resorts, villas, desert camps and local tours across Rajasthan.
- Keywords: Rajasthan hotels, hotels in Rajasthan, Rajasthan resorts, Udaipur resorts, Jaipur hotels, Rajasthan villas, Rajasthan tour packages, Rajasthan travel agency, Rajasthan sightseeing tours, Jaisalmer desert camp
- Hero eyebrow: EXPLORE RAJASTHAN
- Hero H1: Your Guide to Stays, Tours & Experiences (unchanged)
- Hero text: Get information about hotels, villas, local tours, desert camping and more across Rajasthan. We are here to assist you with your travel plans.
- Hero image alt: Rajasthan fort and Aravalli hills
- Enquiry widget "Location" options: Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajabgarh / Sariska, Ranthambore, Mount Abu, Bikaner
- Trust strip: unchanged
- Section "Explore Lonavala" → "Explore Rajasthan"; the six category cards:
  - Hotels & Resorts: Explore palace hotels and resorts across Rajasthan.
  - Villas & Havelis: Private villas, havelis and homestays for your stay.
  - Local Tours & Sightseeing: Discover forts, palaces, lakes and old cities.
  - Desert Camping & Outdoor Experiences: Dune camps, jungle camps and nature stays.
  - Cabs & Transfers: Local cabs, airport transfers and intercity routes.
  - Things To Do: Explore activities and experiences in Rajasthan.
- "Popular Hotels & Resorts in Lonavala" → "Popular Hotels & Resorts in Rajasthan": show the four Ananta properties (hotels 1–4 below), in that order.
- "Explore Lonavala with Local Tours" → "Explore Rajasthan with Local Tours": show tours 1–4 below.
- Trust row: "Local Expertise in Lonavala" → "Local Expertise in Rajasthan"
- Agency sentence: We are an independent travel agency providing hotel, villa and tour enquiry assistance in Rajasthan. We are not affiliated with any hotel, resort or service provider.

## Hotels & Resorts (`/hotels` and `/hotels/[slug]`)

List page:
- Meta title: Hotels & Resorts in Rajasthan | {BRAND_NAME}
- Meta description: Browse popular hotels and resorts in Udaipur, Jaipur, Pushkar, Jodhpur and Jaisalmer. Get enquiry assistance from {BRAND_NAME}, an independent travel agency.
- H1: Hotels & Resorts in Rajasthan. Sub-line: Information on stays across Rajasthan

Detail meta pattern: `{Name} – {City} Hotel | {BRAND_NAME}` and `Information on {Name} in {City}: location, facilities and nearby places. {BRAND_NAME} is an independent travel agency offering enquiry assistance.`

Detail body pattern (same three-paragraph shape as now): paragraph 1 says what and where the property is; paragraph 2 describes the surrounding area for sightseeing planning; paragraph 3 gives the highlights and ends with the existing sentence "Accommodation options, facilities, policies and other property details may vary. Visitors are advised to verify the applicable information for their selected travel dates before proceeding."

### Featured: the four Ananta properties

**1. The Ananta Udaipur** — slug `the-ananta-udaipur`
- Location label: Kodiyat Road, Udaipur
- Card text: A 40-acre hillside resort in the Aravallis with more than 230 villas, open-to-sky bathrooms and wide mountain views.
- Address: Village Bujhda, Tehsil Girwa, Kodiyat Road, Udaipur, Rajasthan 313031
- Getting there: about 30 km from Maharana Pratap Airport (UDR), about 11 km from Udaipur Railway Station
- Quick facts: Estate 40+ acres; Villas 230+; Setting Aravalli valley; Key feature open-to-sky bathrooms
- Highlights: hillside setting with ridge views from villa balconies; garden-style open-air showers; large infinity pool; Mudra Spa with Ayurvedic therapies
- Amenities: infinity swimming pool, Mudra Spa & wellness, fitness centre, kids activity zone, cycling and walking trails, banquet lawns, in-room dining, Wi-Fi, valet and travel desk
- Dining: Oasis (all-day multi-cuisine, Rajasthani and North Indian), Float (poolside bar and lounge), Ananta Tara (open-air hillside terrace, grills)
- Room types: Luxury Cottage, Premium Wooden Cottage with Bathtub, Executive Suite, Grand Suite (two-bedroom family suite), Presidential Villa (private pool), Ananta Villa, Chairman Villa
- Paragraph 2 cue: Lake Pichola, City Palace, Sajjangarh (Monsoon Palace) and the old city are a short drive away.

**2. Ananta Spa & Resort Pushkar** — slug `ananta-spa-resort-pushkar`
- Location label: Leela Sevri, Pushkar
- Card text: A 9-acre resort just outside Pushkar with standalone cottages and canopied tented suites set around palm courtyards.
- Address: Village Leela Sevri, 4 km before Pushkar, Rajasthan 305022
- Getting there: about 140 km from Jaipur International Airport (JAI), about 13 km from Ajmer Junction
- Quick facts: Grounds 9 acres; 72 keys (52 cottages, 20 tented suites); Setting desert and hills; Signature tented suites
- Highlights: air-conditioned tented suites with wooden interiors; central pool with palm gazebos; Rajasthani thalis and regional cooking; Mudra Ayurvedic spa
- Amenities: outdoor pool, Mudra Ayurvedic Spa, palm courtyards, multi-cuisine dining, banquet and event lawn, Wi-Fi, Pushkar sightseeing desk
- Dining: Oasis Pushkar (multi-cuisine), Gazebo Deck (poolside evening lounge)
- Room types: 5 categories (names not supplied; show "Cottages and tented suites, details on enquiry")
- Paragraph 2 cue: Pushkar Lake, the Brahma Temple, the ghats and camel safaris in the dunes are close by.

**3. Ananta Spa & Resort Ajabgarh** — slug `ananta-spa-resort-ajabgarh`
- Location label: Ajabgarh, Alwar
- Card text: A quiet boutique resort in the Aravalli valley near Sariska, known for stone villas with private plunge pools.
- Address: Tehsil Thanagazi, District Alwar, Rajasthan 301027
- Getting there: about 95 km from Jaipur International Airport (JAI), about 60 km from Dausa Railway Station
- Quick facts: Ambiance boutique; Surroundings Sariska foothills; Signature private pool villas; Experiences nature and heritage
- Highlights: secluded valley setting; villas with private splash pools; close to Sariska Tiger Reserve and Bhangarh; Mudra Spa
- Amenities: central swimming pool, Mudra Spa, courtyard dining, stargazing terrace, safari and tour desk, Wi-Fi in villas
- Dining: Valley Dine (regional Indian, farm-to-table style)
- Room types: 5 categories (names not supplied; show "Villas and suites, details on enquiry")
- Paragraph 2 cue: Sariska safaris, Bhangarh Fort and Ajabgarh Fort are the main outings.

**4. Ananta Spa & Resort Jaipur** — slug `ananta-spa-resort-jaipur`
- Location label: Kukas, Jaipur
- Card text: A palace-style resort on the Delhi–Jaipur highway at Kukas, with large banquet spaces and easy access to Amer Fort.
- Address: Delhi-Jaipur Highway, Kukas, Jaipur, Rajasthan (leave the PIN code out: the Ananta information site shows 302028 and Google Maps shows 302046, so it needs confirming)
- Getting there: about 32 km from Jaipur International Airport (JAI), about 22 km from Jaipur Junction
- Quick facts: Style palatial Rajputana; Location Kukas; Events ballrooms and lawns; Heritage near Amer Fort
- Highlights: jharokhas, carved stone and courtyards; large pool with arched pavilions; indoor ballrooms and outdoor lawns for weddings; Mudra Spa
- Amenities: swimming pool, Mudra Spa & salon, fitness pavilion, signature dining, ballrooms and lawns, valet and concierge, Wi-Fi
- Dining: Sheesh Mahal Dining (Rajasthani and multi-cuisine), Sura Lounge & Bar
- Room types: 2 categories (names not supplied; show "Rooms and suites, details on enquiry")
- Paragraph 2 cue: Amer Fort, Jaigarh, Nahargarh, Jal Mahal and the walled Pink City.

### Other hotels (write card text and three paragraphs in the same pattern, using only general, well-known facts about the location)

| # | Name | Slug | City / area |
|---|---|---|---|
| 5 | Taj Lake Palace | `taj-lake-palace-udaipur` | Lake Pichola, Udaipur |
| 6 | The Leela Palace Udaipur | `the-leela-palace-udaipur` | Lake Pichola, Udaipur |
| 7 | Radisson Blu Palace Resort & Spa | `radisson-blu-palace-resort-udaipur` | Malla Talai, Udaipur |
| 8 | WelcomHeritage Traditional Haveli | `welcomheritage-traditional-haveli-jaipur` | Bani Park, Jaipur |
| 9 | Taj Hari Mahal | `taj-hari-mahal-jodhpur` | Jodhpur |
| 10 | Fort Rajwada | `fort-rajwada-jaisalmer` | Jaisalmer |
| 11 | Hummingbird Resorts Mount Abu | `hummingbird-resorts-mount-abu` | Achalgarh Road, Mount Abu |
| 12 | Heritage Resort Bikaner | `heritage-resort-bikaner` | Jaipur Road, Bikaner |

## Villas & Havelis (`/villas` and `/villas/[slug]`)

List page:
- Meta title: Villas & Havelis in Rajasthan | {BRAND_NAME}
- Meta description: Find private villas, havelis and homestays in Udaipur and Jaipur for your family or group. Enquiry assistance from {BRAND_NAME}.
- H1: Villas in Rajasthan. Sub-line: Private villa and haveli stays for families and groups

Keep the villa detail template exactly (Quick Property Information, About, Accommodation, Features, Amenities, Dining & Food, Location, Things To Do Around, Important Information, Cancellation). Replace "Lonavala, Maharashtra" with the record's city + "Rajasthan", "Hill / Nature Surroundings" with the record's setting, and "Things To Do Around Lonavala" with "Things To Do Around {City}". Bedroom counts are not supplied: use "Multiple Bedrooms" and remove "Features N bedrooms" from the meta description pattern (use "Information on {Name} in {City}. Contact {BRAND_NAME} for enquiry assistance."). Only show "Private Pool" where the table says so.

| # | Name | Slug | City | Type | Setting | Pool |
|---|---|---|---|---|---|---|
| 1 | The Riverside Estate | `the-riverside-estate-udaipur` | Udaipur | Private Villa | Udaipur outskirts | Yes |
| 2 | Devraj Villa | `devraj-villa-udaipur` | Sajjan Nagar, Udaipur | Private Villa | Sajjan Nagar area | not stated |
| 3 | The Udaipur Luxurious Villa | `the-udaipur-luxurious-villa` | Udaipur | Private Villa | Udaipur outskirts | not stated |
| 4 | ELIVAAS Signature Lakemount | `elivaas-signature-lakemount-udaipur` | Malla Talai, Udaipur | 2 BHK Private Villa | Malla Talai area | Yes |
| 5 | Jaipur Haveli | `jaipur-haveli` | Johri Bazar, Jaipur | Heritage Haveli Homestay | Walled city | not stated |
| 6 | Mahlan Haveli | `mahlan-haveli-jaipur` | Gopalbari, Jaipur | Haveli Homestay | City | not stated |
| 7 | Haveli Raghu Niwas | `haveli-raghu-niwas-jaipur` | Jhotwara, Jaipur | Heritage Guest House | City | not stated |
| 8 | The Haveli | `the-haveli-jaipur` | C-Scheme, Jaipur | Homestay | City | not stated |

## Local Tours (`/tours` and `/tours/[slug]`)

List page:
- Meta title: Local Tours in Rajasthan | {BRAND_NAME}
- Meta description: Explore Rajasthan with local sightseeing tours in Jaipur, Udaipur, Jodhpur, Jaisalmer and Pushkar, plus Sariska and Ranthambore outings.
- Intro 1: Explore Rajasthan's forts, palaces, lakes, old-city lanes, temples and desert landscapes with local tour information and travel assistance.
- Intro 2: Rajasthan is India's largest state and each city has its own character: the pink walls of Jaipur, the lakes of Udaipur, the blue lanes of Jodhpur and the golden sandstone of Jaisalmer. There is something here for every traveller.
- Intro 3: unchanged ("Our local tours are suitable for...")
- Chips: Forts & Palaces, Lakes & Ghats, Old City Walks, Desert Landscapes, Wildlife Nearby
- Tour categories (8 cards):
  - Jaipur Sightseeing: Forts, palaces and the Pink City.
  - Udaipur Lakes & Palaces: Lake Pichola, City Palace and gardens.
  - Forts & Heritage: Mehrangarh, Jaisalmer Fort, Amer and more.
  - Temples & Pilgrimage: Pushkar, Ajmer and historic temples.
  - Desert & Dunes: Sam dunes, camel rides and sunsets.
  - Wildlife & Nature: Sariska and Ranthambore outings.
  - Family & Leisure: Relaxed experiences suitable for families and groups.
  - Custom Local Tours: Tour information based on your preferences.
- Popular Places Covered: Amber Palace, Hawa Mahal, City Palace Jaipur, Jal Mahal, Lake Pichola, Mehrangarh Fort, Jaisalmer Fort, Pushkar Lake, Bhangarh Fort
- Sample route heading: Sample Jaipur Sightseeing Route (For Reference). Stops: Start (preferred pickup point) → Amber Palace → Jaigarh Fort → Jal Mahal (photo stop) → City Palace → Jantar Mantar → Hawa Mahal / Local Market → Return. Keep the existing note below it.
- "Travel Assistance May Include" / "May Not Include" / Important Note: unchanged.

Detail template: keep as is (highlights, inclusions, exclusions, enquiry form). Meta pattern: `{Tour} – {City} Tour | {BRAND_NAME}` and `Information on the {Tour} in {City}. Duration: {duration}. Contact {BRAND_NAME} for details.` Durations are approximate and for reference.

| # | Tour | Slug | City | Duration | Card text | Stops |
|---|---|---|---|---|---|---|
| 1 | Jaipur Forts & Pink City Tour | `jaipur-forts-pink-city-tour` | Jaipur | 8 Hours | See Amber Palace, the City Palace and the landmarks of the Pink City in a comfortable private cab tour. | Amber Palace, Jaigarh Fort, Jal Mahal, City Palace, Jantar Mantar, Hawa Mahal |
| 2 | Udaipur Lakes & Palaces Tour | `udaipur-lakes-palaces-tour` | Udaipur | 7 Hours | Explore the City of Lakes, from old-city ghats and temples to gardens and a hilltop sunset. | Jagdish Temple, Gangaur Ghat, Bagore Ki Haveli, Ambrai Ghat, Saheliyon Ki Bari, Monsoon Palace |
| 3 | Jodhpur Blue City Heritage Tour | `jodhpur-blue-city-heritage-tour` | Jodhpur | 6 Hours | Visit Mehrangarh Fort and the old blue lanes below it, with a stepwell and a marble memorial on the way. | Mehrangarh Fort, Jaswant Thada, Rao Jodha Desert Rock Park, Toorji Ka Jhalra |
| 4 | Jaisalmer Fort & Sam Dunes Sunset Tour | `jaisalmer-fort-sam-dunes-tour` | Jaisalmer | 9 Hours | Walk the living fort and its carved havelis, then head out to the Sam dunes for sunset. | Jaisalmer Fort, Patwon Ki Haveli, Nathmal Ki Haveli, Gadisar Lake, Bada Bagh, Sam Sand Dunes |
| 5 | Pushkar Temples & Ghats Tour | `pushkar-temples-ghats-tour` | Pushkar | 4 Hours | A relaxed walk through Pushkar's temples, ghats and bazaar around the sacred lake. | Brahma Temple, Pushkar Lake ghats, Varaha Temple, Rangji Temple |
| 6 | Sariska & Bhangarh Day Trip | `sariska-bhangarh-day-trip` | Ajabgarh / Alwar | 8 Hours | Combine a Sariska safari outing with the ruins of Bhangarh and Ajabgarh. | Sariska Tiger Reserve, Bhangarh Fort, Ajabgarh Fort |
| 7 | Bishnoi Village Safari | `bishnoi-village-safari-jodhpur` | Jodhpur | 4–5 Hours | A countryside outing to Bishnoi villages near Jodhpur to see local crafts and rural life. | Bishnoi villages, craft workshops, Guda lake area |
| 8 | Pushkar Camel Safari | `pushkar-camel-safari` | Pushkar | 2–3 Hours | An evening camel or camel-cart ride through the dunes outside Pushkar. | Pushkar dunes at sunset |

Tour highlights block ("Private AC Cab", "Hotel Pickup/Drop" and so on): keep as is. Safari permits, entry tickets and camel ride charges go under Exclusions for tours 4, 6, 7 and 8.

## Desert Camping (`/camping`)

- Meta title: Desert Camping & Outdoor Experiences in Rajasthan
- Meta description: Sleep under the stars in the Thar. Information on desert camps, luxury tents and jungle camps in Jaisalmer, Pushkar and Ranthambore.
- H1: Camping & Outdoor Experiences in Rajasthan
- Intro: Rajasthan is one of India's best places to camp. From dune camps at Sam near Jaisalmer to tented stays outside Pushkar and jungle camps around Ranthambore, camping here means camel rides, folk music by the fire, wide desert skies and quiet mornings.
- Feature cards:
  - Scenic Locations: Campsites near dunes, hills and forest edges
  - Bonfire & Folk Music: Evenings with Rajasthani music and dance
  - Camel & Jeep Safaris: Dune rides at sunrise and sunset
  - Safe & Secure: Verified campsites with safety & hygiene
  - Perfect for Everyone: Ideal for families, friends, couples & groups
- Types of Camping Experiences (replace the existing cards one for one; if there are more cards than four, repeat the pattern with Pushkar and Ranthambore variants): Desert Dune Camps (Sam and Khuri, Jaisalmer); Luxury Tented Stays (Pushkar); Jungle Camps (Ranthambore); Hill & Lake Camps (Aravalli, Mount Abu)
- Activities: Camel Safari, Jeep Safari, Bonfire & Folk Music, Star Gazing, Village Walks, Photography
- Why Choose Us: unchanged
- Popular Camping Spots: Sam Sand Dunes, Khuri Dunes, Pushkar, Ranthambore, Osian, Mount Abu, And Many More
- If the page lists named camps, use these:

| Camp | Area |
|---|---|
| Sam Sand Dunes Camps Jaisalmer | Sam, Jaisalmer |
| Desert Stay Camping | Sam, Jaisalmer |
| Rawai Luxury Tents Resort & Spa | Pushkar |
| Pushkar Desert Karni Camp | Pushkar |
| Royal Pushkar Camps | Pushkar |
| Ranthambore Nature Camp Resort | Sawai Madhopur |
| Jungle Cave Resort | Ranthambore |
| Jungle Retreat Ranthambore | Sawai Madhopur |

## Cabs & Transfers (`/cabs`)

- Meta title: Cabs & Transfers in Rajasthan
- Meta description: Cab services for local sightseeing, airport transfers and intercity trips across Rajasthan, including Jaipur, Udaipur, Jodhpur and Jaisalmer.
- H1: Cabs & Transfers in Rajasthan
- About paragraph: replace "in Lonavala and beyond" with "across Rajasthan"; rest unchanged.
- Feature cards, vehicle options and "Why Choose Our Cab Services" : unchanged.
- Popular routes (8 cards):
  - Jaipur Local Sightseeing: Explore the forts and the Pink City in a comfortable cab.
  - Jaipur Airport Transfer: Pick-up and drop from/to Jaipur International Airport.
  - Udaipur Airport Transfer: On-time transfers to/from Maharana Pratap Airport.
  - Jaipur to Pushkar & Ajmer: Comfortable one way or round trip.
  - Jaipur to Udaipur: Intercity drive with optional stops on the way.
  - Jodhpur to Jaisalmer: A desert highway drive to the Golden City.
  - Jaipur to Ajabgarh & Sariska: Transfers to the Sariska valley and Bhangarh.
  - Outstation Trips: Custom multi-city Rajasthan circuits as per your plan.

## Things To Do (`/things-to-do`)

- Meta title: Things To Do in Rajasthan | Top Attractions & Activities
- Meta description: Explore top attractions, desert activities, heritage sites and family-friendly experiences across Rajasthan.
- H1: Things To Do in Rajasthan; hero alt: Things To Do in Rajasthan
- Four highlight chips: Diverse Experiences (Heritage, desert, wildlife & more); Perfect Getaway (unchanged); Royal Heritage (Forts and palaces in every city); Best in Winter (October to March is peak season)
- Categories:
  - Forts & Palaces: Amber, Mehrangarh, City Palace & more
  - Desert Experiences: Dunes, camel safaris & camps
  - Heritage & Culture: Havelis, stepwells, temples & museums
  - Lakes & Scenic Spots: Pichola, Gadisar, ghats & viewpoints
  - Wildlife & Nature: Sariska, Ranthambore & rock parks
- Popular Things To Do (attraction cards; for each, write one informative line saying what it is):

| Attraction | City |
|---|---|
| Amber Palace | Jaipur |
| Hawa Mahal | Jaipur |
| City Palace | Jaipur |
| Jantar Mantar | Jaipur |
| Jal Mahal | Jaipur |
| Jaigarh Fort | Jaipur |
| Monsoon Palace | Udaipur |
| Saheliyon Ki Bari | Udaipur |
| Jagdish Temple | Udaipur |
| Gangaur Ghat | Udaipur |
| Ambrai Ghat | Udaipur |
| Bagore Ki Haveli | Udaipur |
| Mehrangarh Fort | Jodhpur |
| Jaswant Thada | Jodhpur |
| Toorji Ka Jhalra | Jodhpur |
| Rao Jodha Desert Rock Park | Jodhpur |
| Jaisalmer Fort | Jaisalmer |
| Patwon Ki Haveli | Jaisalmer |
| Bada Bagh | Jaisalmer |
| Gadisar Lake | Jaisalmer |
| Brahma Temple | Pushkar |

- Activities: Fort & Palace Visits, Camel & Jeep Safari, Boat Rides, Heritage Walks, Wildlife Safari, Photography, Shopping & Bazaars, Folk Music & Dance
- Notes list: keep, replacing "in Lonavala" with "in Rajasthan".
- Why Explore Rajasthan?: Wide range of experiences for all ages; Heritage, desert & wildlife in one state; Works for short breaks and long circuits; Well-connected tourist destinations; A different character in every city. (Drop "Memorable experiences guaranteed".)
- Best Time To Visit: Rajasthan is best from October to March. The monsoon months bring greenery to Udaipur and Mount Abu, and summer is very hot in the desert districts.
  - Winter (Oct – Mar): Sightseeing. Pleasant days for forts, palaces and desert camps
  - Monsoon (Jul – Sep): Sightseeing. Green hills and full lakes in Udaipur and Mount Abu
- Popular Locations: Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar, Mount Abu, Ranthambore, Bikaner, And Many More

## About Us, Contact, Enquiry

- About: replace "Lonavala Gateway" with {BRAND_NAME}; "Deep knowledge of Lonavala and nearby areas" → "Deep knowledge of Rajasthan's cities and circuits"; mission sentence "...planning their trip to Lonavala and nearby destinations" → "...planning their trip to Rajasthan". Meta: "About Us | {BRAND_NAME}" with the existing description, brand swapped. Everything else unchanged, including "What we don't do".
- Contact and Enquiry currently reuse the home page metadata. Give them their own: "Contact Us | {BRAND_NAME}" / "Send an Enquiry | {BRAND_NAME}" with a one-line description each.
- Any location or property dropdown in the enquiry forms: use the nine locations from the home widget and the new hotel, villa and tour names.

## Policy pages

Terms & Conditions, Privacy Policy, Cancellation Policy, Refund Policy, Disclaimer, Hotel Non-Affiliation: change only the brand name and the words "Lonavala" / "in Lonavala" → "Rajasthan" / "in Rajasthan", plus their meta titles and descriptions. Do not change any legal substance. In Hotel Non-Affiliation, add one sentence: "This includes Ananta Hotels & Resorts and every other property named on this website; property names and trademarks belong to their respective owners."

## SEO and technical clean-up

- Update `sitemap`, `robots`, canonical URLs, Open Graph and Twitter titles/descriptions, the OG/Twitter image (new Rajasthan image, same size), favicon alt/title text and any JSON-LD (`TravelAgency`, `areaServed` → Rajasthan).
- Update the WhatsApp prefilled message everywhere to {WHATSAPP_PREFILL}.
- Rename image files and folders that contain Lonavala-specific names (for example `lonavala-hero.jpg`, `tiger-point.jpg`) and update references.

## Verification before you report done

1. Search the whole repo (code, data, public, metadata) for: `Lonavala`, `Khandala`, `Pawna`, `Tiger Point`, `Bhushi`, `Rajmachi`, `Tikona`, `Karla`, `Bhaja`, `Lohagad`, `Aamby`, `Della`, `Fariyas`, `Rhythm`, `Mumbai Airport`, `Pune`, `Shirdi`, `Mahabaleshwar`, `Alibaug`. The only allowed hits are the office address and the email domain.
2. Search the repo for `★`, `Rated`, `rating`, `reviews` and `aggregateRating`; nothing rating-related should render on any page or appear in metadata.
3. Confirm "Independent Travel Agency" is visible in the header and footer of every page.
4. Run the build and lint; fix anything you broke.
5. Open every route in the browser at desktop and mobile widths and confirm the layout is visually identical to before, with no overflow from longer text.
6. Confirm every new detail slug renders and every old slug redirects or 404s cleanly.
7. Give me a summary: files changed, records added, the contents of `IMAGES_TODO.md`, and any field you hid because data was missing.
