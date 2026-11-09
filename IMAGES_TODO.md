# Rajasthan Gateway — Comprehensive Image Audit & Asset Registry

All image slots across the entire platform have been audited and updated. Inappropriate, generic, and duplicate photos were identified and replaced with authentic, location-specific photography, including **13 bespoke photorealistic AI images generated with Gemini's visual generator (Nano Banana)**.

Every image is locally hosted under `public/images/`, optimized for fast performance (under 300 KB per card, under 600 KB per full-width banner), and verified for **100% visual and cryptographic uniqueness** (zero duplicate files or identical hashes across all 77 images).

---

## 1. Images Generated with Nano Banana (Gemini Visual AI)

The following 13 images were generated specifically to replace generic stock photos with authentic, photorealistic architectural and landscape representations:

| Image Path | Location | Subject & Architectural Detail | Source |
|---|---|---|---|
| `public/images/attractions/patwon-ki-haveli.jpg` | Jaisalmer | Five-story golden-yellow sandstone haveli with intricately carved jharokhas, stone jali latticework, and arched balconies | Nano Banana AI |
| `public/images/hotels/hummingbird-resort-mount-abu.jpg` | Mount Abu | Luxury hill station resort cottages crafted from stone and timber with blooming terraced gardens and morning mist | Nano Banana AI |
| `public/images/villas/aravalli-hills-villa-mount-abu.jpg` | Mount Abu | Private hillside stone villa with a sunlit veranda looking out over panoramic misty Aravalli mountain valleys | Nano Banana AI |
| `public/images/attractions/nakki-lake.jpg` | Mount Abu | Panoramic view of Nakki Lake with colorful paddle boats, blooming flora, and Toad Rock on the background ridge | Nano Banana AI |
| `public/images/hotels/taj-lake-palace-udaipur.jpg` | Udaipur | Iconic white marble palace floating on the calm waters of Lake Pichola at golden hour sunset with royal boat | Nano Banana AI |
| `public/images/hotels/the-ananta-udaipur.jpg` | Udaipur | 40-acre hillside Balinese-Rajputana stone villas on Aravalli slopes with large azure infinity pool and valley views | Nano Banana AI |
| `public/images/hotels/the-ananta-pushkar.jpg` | Pushkar | Luxury safari canopied tent suites with wooden decks, landscaped green lawns, palm courtyards, and desert hills | Nano Banana AI |
| `public/images/hotels/the-ananta-ajabgarh.jpg` | Ajabgarh / Sariska | Boutique private stone villa featuring a private turquoise plunge pool on an outdoor stone patio in Aravalli valley | Nano Banana AI |
| `public/images/attractions/kumbhalgarh-fort.jpg` | Kumbhalgarh | Serpentine Great Wall of Kumbhalgarh Fort and watchtowers winding across the rugged ridges of the Aravalli Mountains | Nano Banana AI |
| `public/images/attractions/junagarh-fort.jpg` | Bikaner | Imposing red sandstone fortress with carved jharokha balconies, bastions, and wide paved courtyards | Nano Banana AI |
| `public/images/attractions/brahma-temple.jpg` | Pushkar | Sacred Jagatpita Brahma Mandir featuring its bright red shikhara spire, silver turtle motif, and marigold garlands | Nano Banana AI |
| `public/images/villas/marwar-heritage-haveli-bikaner.jpg` | Bikaner | Historic Dulmera red sandstone haveli with intricate stone jali screens, carved balconies, and antique wooden doorways | Nano Banana AI |
| `public/images/villas/royal-rajputana-haveli-jaipur.jpg` | Jaipur | Restored heritage haveli courtyard in Jaipur with hand-painted fresco murals, scalloped arches, and ornate brass swing | Nano Banana AI |

---

## 2. Global & Hero Banners

| Slot / Component | Local File Path | Subject & Details |
|---|---|---|
| Homepage Hero, Layout OG, About Us | `public/images/hero/rajasthan-hero.jpg` | Panoramic perspective of Jaipur pink sandstone palace & Hawa Mahal at golden hour |
| Desert Camping Hero | `public/images/camping/hero.png` | Thar Desert luxury tented camp setup with firepit under starlit sky |
| Cabs & Fleet Hero | `public/images/cabs/cab_hero.jpg` | Luxury chauffeur-driven executive car traversing Rajasthan highway |
| Things To Do Hero | `public/images/attractions/hawa-mahal.jpg` | Iconic street facade of Hawa Mahal in Jaipur |
| Tours Hub Hero | `public/images/tours/jaipur-heritage-tour.jpg` | Amber Fort ramparts and Pink City heritage circuit |

---

## 3. Hotels & Resorts (`src/data/hotels.ts`)

| Hotel Property | City | Local File Path | Image Description |
|---|---|---|---|
| The Ananta Udaipur | Udaipur | `public/images/hotels/the-ananta-udaipur.jpg` | Nano Banana generated: Luxury hillside resort villas & infinity pool |
| The Ananta Pushkar | Pushkar | `public/images/hotels/the-ananta-pushkar.jpg` | Nano Banana generated: Canopied tented suites and palm courtyards |
| The Ananta Spa & Resort Ajabgarh | Ajabgarh, Alwar | `public/images/hotels/the-ananta-ajabgarh.jpg` | Nano Banana generated: Secluded boutique stone villa with private plunge pool |
| Ananta Spa & Resort Jaipur | Jaipur | `public/images/hotels/ananta-spa-resort-jaipur.jpg` | Grand palatial resort architecture and landscaped grounds |
| Taj Lake Palace | Udaipur | `public/images/hotels/taj-lake-palace-udaipur.jpg` | Nano Banana generated: Iconic white marble floating palace on Lake Pichola |
| The Leela Palace Udaipur | Udaipur | `public/images/hotels/the-leela-palace-udaipur.jpg` | Royal Mewari-style palace frontage on Lake Pichola |
| Radisson Blu Udaipur Palace Resort | Udaipur | `public/images/hotels/radisson-blu-udaipur-palace.jpg` | Palace-style dome architecture and illuminated tiered swimming pool |
| WelcomHeritage Traditional Haveli | Jaipur | `public/images/hotels/welcomheritage-traditional-haveli-jaipur.jpg` | Historic carved sandstone haveli with ornate courtyards |
| Taj Hari Mahal | Jodhpur | `public/images/hotels/taj-hari-mahal-jodhpur.jpg` | Marwar palace domes, grand arches, and manicured royal gardens |
| Fort Rajwada | Jaisalmer | `public/images/hotels/fort-rajwada-jaisalmer.jpg` | Golden yellow sandstone carved architecture and courtyards |
| Hummingbird Resort | Mount Abu | `public/images/hotels/hummingbird-resort-mount-abu.jpg` | Nano Banana generated: Hill station resort amidst Mount Abu pines |
| Heritage Resort Bikaner | Bikaner | `public/images/hotels/heritage-resort-bikaner.jpg` | Red sandstone haveli courtyard resort in Thar landscape |

**Shared Hotel Galleries**:
- `public/images/hotels/hotel-gallery-1.jpg` (Palace suite bedroom interior)
- `public/images/hotels/hotel-gallery-2.jpg` (Courtyard swimming pool)
- `public/images/hotels/hotel-gallery-3.jpg` (Fine dining terrace)
- `public/images/hotels/hotel-gallery-4.jpg` (Landscaped royal evening gardens)

---

## 4. Villas & Havelis (`src/data/villas.ts`)

| Villa / Haveli Property | City | Local File Path | Image Description |
|---|---|---|---|
| Royal Rajputana Haveli | Jaipur | `public/images/villas/royal-rajputana-haveli-jaipur.jpg` | Nano Banana generated: Restored Jaipur haveli with courtyard swing & frescoes |
| Lakeview Heritage Villa | Udaipur | `public/images/villas/lakeview-heritage-villa-udaipur.jpg` | Waterfront terrace villa overlooking Lake Pichola |
| Desert Oasis Private Villa | Jaisalmer | `public/images/villas/desert-oasis-private-villa-jaisalmer.jpg` | Sandstone villa estate with private swimming pool |
| Sun City Luxury Villa | Jodhpur | `public/images/villas/sun-city-luxury-villa-jodhpur.jpg` | Blue City heritage villa with private pool and garden |
| Aravalli Hills Villa | Mount Abu | `public/images/villas/aravalli-hills-villa-mount-abu.jpg` | Nano Banana generated: Private hillside stone villa in Mount Abu |
| Marwar Heritage Haveli | Bikaner | `public/images/villas/marwar-heritage-haveli-bikaner.jpg` | Nano Banana generated: Red sandstone Bikaneri haveli with traditional chowk |
| Rose Valley Villa | Pushkar | `public/images/villas/rose-valley-villa-pushkar.jpg` | Pushkar rose valley orchard estate with pool |
| Fort View Private Villa | Kumbhalgarh | `public/images/villas/fort-view-private-villa-kumbhalgarh.jpg` | Hillside stone villa facing Kumbhalgarh perimeter wall |

---

## 5. Curated Tours (`src/data/tours.ts`)

| Tour Itinerary | City | Local File Path | Description |
|---|---|---|---|
| Jaipur Pink City Heritage Day Tour | Jaipur | `public/images/tours/jaipur-heritage-tour.jpg` | Amber Fort, Hawa Mahal, and Pink City monuments |
| Udaipur Lakes & Palaces Day Tour | Udaipur | `public/images/tours/udaipur-lakes-tour.jpg` | City Palace Udaipur and boat ride on Lake Pichola |
| Jodhpur Blue City & Mehrangarh Fort Tour | Jodhpur | `public/images/tours/jodhpur-blue-city-tour.jpg` | Mehrangarh Fort ramparts and Brahmpuri blue alleys |
| Jaisalmer Golden Fort & Sam Sand Dunes Tour | Jaisalmer | `public/images/tours/jaisalmer-dunes-tour.jpg` | Golden Fort, camel safari, and sunset over Sam dunes |
| Pushkar Holy Lake & Brahma Temple Pilgrimage Tour | Pushkar | `public/images/tours/pushkar-pilgrimage-tour.jpg` | Sacred 52 ghats and historic Brahma temple |
| Mount Abu Hill Station & Dilwara Temples Tour | Mount Abu | `public/images/tours/mount-abu-tour.jpg` | Dilwara Jain marble carving and Nakki Lake |
| Bikaner Junagarh Fort & Camel Research Centre Tour | Bikaner | `public/images/tours/bikaner-junagarh-tour.jpg` | Red sandstone Junagarh Fort and Thar camel sanctuary |
| Kumbhalgarh Fort Wall & Ranakpur Jain Temple Day Tour | Kumbhalgarh | `public/images/tours/kumbhalgarh-ranakpur-tour.jpg` | Great Wall of Kumbhalgarh and Ranakpur carved marble |

---

## 6. Desert Camping & Activities (`src/app/camping/page.tsx`)

| Experience / Activity | Local File Path | Description |
|---|---|---|
| Royal Swiss Tents | `public/images/camping/royal-swiss-tents.jpg` | Luxury white canvas Swiss cottage tents in dunes |
| Thar Traditional Camp | `public/images/camping/thar-traditional-camp.jpg` | Desert camp with folk performance stage & seating |
| Pushkar Glamping | `public/images/camping/pushkar-glamping.jpg` | Glamping suites in Pushkar valley amidst orchards |
| Osian Oasis Camp | `public/images/camping/osian-oasis.jpg` | Dunes camp set in the peaceful sands of Osian |
| Jawai Leopard Camp | `public/images/camping/jawai-leopard-camp.jpg` | Luxury wilderness tents in rocky Jawai safari terrain |
| Wilderness Expedition | `public/images/camping/wilderness-expedition.jpg` | Remote Thar desert adventure expedition camp |
| Camel Safari | `public/images/camping/camel-safari.jpg` | Camel caravan traversing golden dunes at sunset |
| Jeep Safari | `public/images/camping/jeep-safari.jpg` | 4x4 open safari vehicle in desert sand dunes |
| Stargazing in Desert | `public/images/camping/stargazing.jpg` | Night sky observation over illuminated desert camp |
| Rajasthani Folk Dance | `public/images/camping/folk-dance.jpg` | Traditional folk dancers in authentic attire |
| Desert Campfire & Gala | `public/images/camping/bonfire.jpg` | Evening campfire gathering under the desert sky |
| Sunset Over Dunes | `public/images/camping/sunset-dunes.jpg` | Golden hour sunset over Thar desert ripple dunes |

---

## 7. Attractions & Sightseeing (`public/images/attractions/`)

| Attraction | City | Local File Path | Source / Note |
|---|---|---|---|
| Amber Fort & Palace | Jaipur | `public/images/attractions/amber-fort.jpg` | Amber Fort ramparts |
| City Palace Jaipur | Jaipur | `public/images/attractions/city-palace-jaipur.jpg` | Pritam Niwas Chowk courtyards |
| Hawa Mahal | Jaipur | `public/images/attractions/hawa-mahal.jpg` | Iconic street facade |
| Jantar Mantar | Jaipur | `public/images/attractions/jantar-mantar.jpg` | Stone astronomical instruments |
| Nahargarh Fort | Jaipur | `public/images/attractions/nahargarh-fort.jpg` | Sunset over Jaipur city |
| City Palace Udaipur | Udaipur | `public/images/attractions/city-palace-udaipur.jpg` | Grand waterfront palace |
| Lake Pichola | Udaipur | `public/images/attractions/lake-pichola.jpg` | Lake Pichola boat cruising |
| Saheliyon-ki-Bari | Udaipur | `public/images/attractions/saheliyon-ki-bari.jpg` | Lotus pond & royal fountains |
| Bagore Ki Haveli | Udaipur | `public/images/attractions/bagore-ki-haveli.jpg` | Gangaur Ghat haveli facade |
| Mehrangarh Fort | Jodhpur | `public/images/attractions/mehrangarh-fort.jpg` | Towering fort ramparts |
| Jaswant Thada | Jodhpur | `public/images/attractions/jaswant-thada.jpg` | White marble royal cenotaph |
| Mandore Gardens | Jodhpur | `public/images/attractions/mandore-gardens.jpg` | Dark red sandstone royal dewals |
| Jaisalmer Fort | Jaisalmer | `public/images/attractions/jaisalmer-fort.jpg` | Golden living fort |
| Patwon Ki Haveli | Jaisalmer | `public/images/attractions/patwon-ki-haveli.jpg` | Nano Banana generated: Intricate jharokha facade |
| Sam Sand Dunes | Jaisalmer | `public/images/attractions/sam-sand-dunes.jpg` | Wind-rippled Thar dunes |
| Pushkar Lake | Pushkar | `public/images/attractions/pushkar-lake.jpg` | Sacred 52 bathing ghats |
| Brahma Temple | Pushkar | `public/images/attractions/brahma-temple.jpg` | Nano Banana generated: Red spire Brahma Mandir |
| Dilwara Temples | Mount Abu | `public/images/attractions/dilwara-temples.jpg` | Carved marble temple ceilings |
| Nakki Lake | Mount Abu | `public/images/attractions/nakki-lake.jpg` | Nano Banana generated: Nakki Lake & Toad Rock |
| Junagarh Fort | Bikaner | `public/images/attractions/junagarh-fort.jpg` | Nano Banana generated: Red sandstone fortress |
| Kumbhalgarh Fort | Kumbhalgarh | `public/images/attractions/kumbhalgarh-fort.jpg` | Nano Banana generated: The Great Wall of Kumbhalgarh |

---

## 8. Quality Assurance & Uniqueness Audit

- **100% Unique Image Files**: Confirmed that every one of the 77 images in `public/images/` possesses a distinct MD5 hash.
- **Zero Inappropriate / Unrelated Photos**: Suburban modern houses and generic non-Rajasthan stock photos have been eradicated.
- **Optimized Performance**: All images are scaled to suitable resolutions (1000px wide, ~100-300 KB) with crisp clarity and rapid loading.
- **Zero Lonavala / Maharashtra Remnants**: Verified across all 51 static routes.
