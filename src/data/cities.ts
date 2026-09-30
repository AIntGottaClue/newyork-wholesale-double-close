export interface Faq { q: string; a: string }
export interface Step { title: string; text: string }
export interface Scenario { title: string; intro: string; items: string[]; outro: string }
export interface City {
  slug: string;
  name: string;
  state: string;
  stateName: string;
  county: string;
  formName: string;
  title: string;
  description: string;
  h1Bottom: string;
  hero: string;
  localNoteTitle: string;
  localNote: string;
  whyHeading: string;
  why: string[];
  steps: Step[];
  faqs: Faq[];
  nearby: string[];
  summaryFees?: boolean;
  summarySteps?: boolean;
  scenario?: Scenario;
  blurb: string;
}

export const brand = "New York Wholesale Double Close";
export const domain = "newyork.wholesaledoubleclose.click";
export const trustBar = ["Published funding fees", "Purchase and resale review", "New York Metro service areas"];
export const cities: City[] = [
  {
    "slug": "new-york-city",
    "name": "New York City",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City",
    "formName": "New-York-City-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in New York City, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in New York City, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in New York City, New York",
    "hero": "New York City comprises five boroughs with distinct communities. Specify the borough, property type and legal owner instead of submitting only a New York mailing address. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the New York City file",
    "localNote": "Specify the borough, property type and legal owner instead of submitting only a New York mailing address. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual New York City transaction",
    "why": [
      "New York City comprises five boroughs with distinct communities. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Specify the borough, property type and legal owner instead of submitting only a New York mailing address. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Specify the borough, property type and legal owner instead of submitting only a New York mailing address. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the New York City request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Which borough is the property in?",
        "a": "A borough identifies the location; it does not establish the ownership form. Send the address and whether your contract concerns a house, condominium or another interest."
      },
      {
        "q": "What should I send for a New York City review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Specify the borough, property type and legal owner instead of submitting only a New York mailing address."
      },
      {
        "q": "Which state rules apply to a New York City deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "brooklyn",
      "queens",
      "manhattan"
    ],
    "blurb": "New York City comprises five boroughs with distinct communities.",
    "summaryFees": true
  },
  {
    "slug": "brooklyn",
    "name": "Brooklyn",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City borough",
    "formName": "Brooklyn-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Brooklyn, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Brooklyn, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Brooklyn, New York",
    "hero": "Brooklyn includes Flatbush, a community featured in the official city tourism guide. For a Flatbush-area deal, identify the exact building and any occupancy questions rather than treating a neighborhood name as a complete property description. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Brooklyn file",
    "localNote": "For a Flatbush-area deal, identify the exact building and any occupancy questions rather than treating a neighborhood name as a complete property description. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Brooklyn transaction",
    "why": [
      "Brooklyn includes Flatbush, a community featured in the official city tourism guide. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Flatbush-area deal, identify the exact building and any occupancy questions rather than treating a neighborhood name as a complete property description. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Flatbush-area deal, identify the exact building and any occupancy questions rather than treating a neighborhood name as a complete property description. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Brooklyn request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What should a Brooklyn building submission include?",
        "a": "Give the address, the interest being sold and the occupancy information you have. Ask your closing team about unresolved tenant or ownership questions before setting the resale sequence."
      },
      {
        "q": "What should I send for a Brooklyn review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Flatbush-area deal, identify the exact building and any occupancy questions rather than treating a neighborhood name as a complete property description."
      },
      {
        "q": "Which state rules apply to a Brooklyn deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "queens",
      "manhattan",
      "bronx"
    ],
    "blurb": "Brooklyn includes Flatbush, a community featured in the official city tourism guide.",
    "summaryFees": true
  },
  {
    "slug": "queens",
    "name": "Queens",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City borough",
    "formName": "Queens-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Queens, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Queens, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Queens, New York",
    "hero": "The official city guide describes Queens as ranging from food destinations to its ocean surf. A Queens address can describe very different settings. Identify the actual lot or unit and any documents your buyer still needs. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Queens file",
    "localNote": "A Queens address can describe very different settings. Identify the actual lot or unit and any documents your buyer still needs. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Queens transaction",
    "why": [
      "The official city guide describes Queens as ranging from food destinations to its ocean surf. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "A Queens address can describe very different settings. Identify the actual lot or unit and any documents your buyer still needs. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A Queens address can describe very different settings. Identify the actual lot or unit and any documents your buyer still needs. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Queens request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit a coastal Queens property?",
        "a": "You can request a review. Describe the exact property and any known insurance, title or contract conditions; the location alone does not determine whether funding is available."
      },
      {
        "q": "What should I send for a Queens review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. A Queens address can describe very different settings. Identify the actual lot or unit and any documents your buyer still needs."
      },
      {
        "q": "Which state rules apply to a Queens deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "manhattan",
      "bronx",
      "staten-island"
    ],
    "blurb": "The official city guide describes Queens as ranging from food destinations to its ocean surf.",
    "summaryFees": true
  },
  {
    "slug": "manhattan",
    "name": "Manhattan",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City borough",
    "formName": "Manhattan-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Manhattan, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Manhattan, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Manhattan, New York",
    "hero": "Manhattan includes Broadway and Central Park, two landmarks in the official city guide. A recognizable Manhattan location does not settle whether the contract conveys real estate or another ownership interest. Confirm the structure with your advisers. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Manhattan file",
    "localNote": "A recognizable Manhattan location does not settle whether the contract conveys real estate or another ownership interest. Confirm the structure with your advisers. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Manhattan transaction",
    "why": [
      "Manhattan includes Broadway and Central Park, two landmarks in the official city guide. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "A recognizable Manhattan location does not settle whether the contract conveys real estate or another ownership interest. Confirm the structure with your advisers. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A recognizable Manhattan location does not settle whether the contract conveys real estate or another ownership interest. Confirm the structure with your advisers. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Manhattan request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Does the ownership form matter in Manhattan?",
        "a": "Yes. Identify the interest being bought and resold, and ask your advisers what approvals or transfer documents it requires. We do not treat every apartment transaction as the same structure."
      },
      {
        "q": "What should I send for a Manhattan review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. A recognizable Manhattan location does not settle whether the contract conveys real estate or another ownership interest. Confirm the structure with your advisers."
      },
      {
        "q": "Which state rules apply to a Manhattan deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "bronx",
      "staten-island",
      "yonkers"
    ],
    "blurb": "Manhattan includes Broadway and Central Park, two landmarks in the official city guide.",
    "summaryFees": true
  },
  {
    "slug": "bronx",
    "name": "The Bronx",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City borough",
    "formName": "Bronx-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in The Bronx, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in The Bronx, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in The Bronx, New York",
    "hero": "The Bronx city guide includes baseball history and its Little Italy. Submit the actual Bronx property records and current occupancy information. Local landmarks describe the area, not the condition of your deal. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the The Bronx file",
    "localNote": "Submit the actual Bronx property records and current occupancy information. Local landmarks describe the area, not the condition of your deal. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual The Bronx transaction",
    "why": [
      "The Bronx city guide includes baseball history and its Little Italy. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Submit the actual Bronx property records and current occupancy information. Local landmarks describe the area, not the condition of your deal. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Submit the actual Bronx property records and current occupancy information. Local landmarks describe the area, not the condition of your deal. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the The Bronx request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if the Bronx property has occupants?",
        "a": "Disclose the information you have and any agreed occupancy terms. Your advisers and closing office should review unresolved issues before you commit to a closing plan."
      },
      {
        "q": "What should I send for a The Bronx review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Submit the actual Bronx property records and current occupancy information. Local landmarks describe the area, not the condition of your deal."
      },
      {
        "q": "Which state rules apply to a The Bronx deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "staten-island",
      "yonkers",
      "new-rochelle"
    ],
    "blurb": "The Bronx city guide includes baseball history and its Little Italy.",
    "summaryFees": true
  },
  {
    "slug": "staten-island",
    "name": "Staten Island",
    "state": "NY",
    "stateName": "New York",
    "county": "New York City borough",
    "formName": "Staten-Island-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Staten Island, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Staten Island, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Staten Island, New York",
    "hero": "Staten Island is New York City’s southernmost borough, with historic attractions and beach views. For a Staten Island purchase, keep the street address and parcel identification together so both contracts describe the same property. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Staten Island file",
    "localNote": "For a Staten Island purchase, keep the street address and parcel identification together so both contracts describe the same property. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Staten Island transaction",
    "why": [
      "Staten Island is New York City’s southernmost borough, with historic attractions and beach views. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Staten Island purchase, keep the street address and parcel identification together so both contracts describe the same property. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Staten Island purchase, keep the street address and parcel identification together so both contracts describe the same property. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Staten Island request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if the two contracts describe the property differently?",
        "a": "Flag the difference before requesting a closing date. Ask the closing office to confirm the legal description and correct any inconsistencies through the appropriate parties."
      },
      {
        "q": "What should I send for a Staten Island review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Staten Island purchase, keep the street address and parcel identification together so both contracts describe the same property."
      },
      {
        "q": "Which state rules apply to a Staten Island deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "yonkers",
      "new-rochelle",
      "peekskill"
    ],
    "blurb": "Staten Island is New York City’s southernmost borough, with historic attractions and beach views.",
    "summaryFees": true
  },
  {
    "slug": "yonkers",
    "name": "Yonkers",
    "state": "NY",
    "stateName": "New York",
    "county": "Westchester County",
    "formName": "Yonkers-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Yonkers, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Yonkers, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Yonkers, New York",
    "hero": "Yonkers developed near the Hudson and Nepperhan Rivers; Philipse Manor Hall is part of that history. For an older Yonkers property, identify the seller and any known title or occupancy questions. A building’s age does not prove an issue exists. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Yonkers file",
    "localNote": "For an older Yonkers property, identify the seller and any known title or occupancy questions. A building’s age does not prove an issue exists. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Yonkers transaction",
    "why": [
      "Yonkers developed near the Hudson and Nepperhan Rivers; Philipse Manor Hall is part of that history. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For an older Yonkers property, identify the seller and any known title or occupancy questions. A building’s age does not prove an issue exists. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For an older Yonkers property, identify the seller and any known title or occupancy questions. A building’s age does not prove an issue exists. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Yonkers request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Does an older Yonkers home change the review?",
        "a": "The actual file matters more than the age alone. Send known issues and the documents your closing office has requested so the purchase and resale can be assessed together."
      },
      {
        "q": "What should I send for a Yonkers review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For an older Yonkers property, identify the seller and any known title or occupancy questions. A building’s age does not prove an issue exists."
      },
      {
        "q": "Which state rules apply to a Yonkers deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "new-rochelle",
      "peekskill",
      "long-beach"
    ],
    "blurb": "Yonkers developed near the Hudson and Nepperhan Rivers; Philipse Manor Hall is part of that history.",
    "summaryFees": true
  },
  {
    "slug": "new-rochelle",
    "name": "New Rochelle",
    "state": "NY",
    "stateName": "New York",
    "county": "Westchester County",
    "formName": "New-Rochelle-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in New Rochelle, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in New Rochelle, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in New Rochelle, New York",
    "hero": "New Rochelle’s city history project documents the community’s long development. Keep the city address, seller’s name and contract dates aligned when submitting a New Rochelle file. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the New Rochelle file",
    "localNote": "Keep the city address, seller’s name and contract dates aligned when submitting a New Rochelle file. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual New Rochelle transaction",
    "why": [
      "New Rochelle’s city history project documents the community’s long development. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Keep the city address, seller’s name and contract dates aligned when submitting a New Rochelle file. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Keep the city address, seller’s name and contract dates aligned when submitting a New Rochelle file. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the New Rochelle request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if my New Rochelle resale contract is not signed?",
        "a": "Say so in the request. An identified buyer and an executed resale contract are different facts; review cannot assume that an unsigned agreement is complete."
      },
      {
        "q": "What should I send for a New Rochelle review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Keep the city address, seller’s name and contract dates aligned when submitting a New Rochelle file."
      },
      {
        "q": "Which state rules apply to a New Rochelle deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "peekskill",
      "long-beach",
      "glen-cove"
    ],
    "blurb": "New Rochelle’s city history project documents the community’s long development.",
    "summaryFees": true
  },
  {
    "slug": "peekskill",
    "name": "Peekskill",
    "state": "NY",
    "stateName": "New York",
    "county": "Westchester County",
    "formName": "Peekskill-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Peekskill, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Peekskill, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Peekskill, New York",
    "hero": "Peekskill’s city history connects its name with the Dutch word for a stream. For a Peekskill request, identify the actual parcel and any unresolved seller-document questions before choosing a closing sequence. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Peekskill file",
    "localNote": "For a Peekskill request, identify the actual parcel and any unresolved seller-document questions before choosing a closing sequence. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Peekskill transaction",
    "why": [
      "Peekskill’s city history connects its name with the Dutch word for a stream. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Peekskill request, identify the actual parcel and any unresolved seller-document questions before choosing a closing sequence. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Peekskill request, identify the actual parcel and any unresolved seller-document questions before choosing a closing sequence. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Peekskill request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Can I submit while seller documents are missing?",
        "a": "You can request a review and list what is missing. Funding and a closing plan depend on the documents and conditions for the actual transaction."
      },
      {
        "q": "What should I send for a Peekskill review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Peekskill request, identify the actual parcel and any unresolved seller-document questions before choosing a closing sequence."
      },
      {
        "q": "Which state rules apply to a Peekskill deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "long-beach",
      "glen-cove",
      "hempstead-village"
    ],
    "blurb": "Peekskill’s city history connects its name with the Dutch word for a stream.",
    "summaryFees": true
  },
  {
    "slug": "long-beach",
    "name": "Long Beach",
    "state": "NY",
    "stateName": "New York",
    "county": "Nassau County",
    "formName": "Long-Beach-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Long Beach, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Long Beach, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Long Beach, New York",
    "hero": "Long Beach’s city history identifies the Historic Red Brick District along Penn Street and its oceanfront setting. A Long Beach coastal address should come with the specific property details and any insurance or inspection conditions already written into the contracts. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Long Beach file",
    "localNote": "A Long Beach coastal address should come with the specific property details and any insurance or inspection conditions already written into the contracts. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Long Beach transaction",
    "why": [
      "Long Beach’s city history identifies the Historic Red Brick District along Penn Street and its oceanfront setting. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "A Long Beach coastal address should come with the specific property details and any insurance or inspection conditions already written into the contracts. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A Long Beach coastal address should come with the specific property details and any insurance or inspection conditions already written into the contracts. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Long Beach request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Do coastal properties have automatic funding restrictions?",
        "a": "This page makes no blanket eligibility claim. Submit the actual contracts and known conditions so the requested purchase-side funding can be reviewed."
      },
      {
        "q": "What should I send for a Long Beach review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. A Long Beach coastal address should come with the specific property details and any insurance or inspection conditions already written into the contracts."
      },
      {
        "q": "Which state rules apply to a Long Beach deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "glen-cove",
      "hempstead-village",
      "freeport"
    ],
    "blurb": "Long Beach’s city history identifies the Historic Red Brick District along Penn Street and its oceanfront setting.",
    "summaryFees": true
  },
  {
    "slug": "glen-cove",
    "name": "Glen Cove",
    "state": "NY",
    "stateName": "New York",
    "county": "Nassau County",
    "formName": "Glen-Cove-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Glen Cove, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Glen Cove, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Glen Cove, New York",
    "hero": "Glen Cove’s official history describes a community closely tied to its North Shore waterfront. For a Glen Cove deal, distinguish the actual lot and improvements from a general waterfront description. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Glen Cove file",
    "localNote": "For a Glen Cove deal, distinguish the actual lot and improvements from a general waterfront description. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Glen Cove transaction",
    "why": [
      "Glen Cove’s official history describes a community closely tied to its North Shore waterfront. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Glen Cove deal, distinguish the actual lot and improvements from a general waterfront description. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Glen Cove deal, distinguish the actual lot and improvements from a general waterfront description. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Glen Cove request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What details matter for a Glen Cove parcel?",
        "a": "Send the address, legal description if available and both contracts. Flag differences between the property description and what the buyer expects to purchase."
      },
      {
        "q": "What should I send for a Glen Cove review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Glen Cove deal, distinguish the actual lot and improvements from a general waterfront description."
      },
      {
        "q": "Which state rules apply to a Glen Cove deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "hempstead-village",
      "freeport",
      "huntington"
    ],
    "blurb": "Glen Cove’s official history describes a community closely tied to its North Shore waterfront.",
    "summaryFees": true
  },
  {
    "slug": "hempstead-village",
    "name": "Hempstead Village",
    "state": "NY",
    "stateName": "New York",
    "county": "Nassau County",
    "formName": "Hempstead-Village-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Hempstead Village, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Hempstead Village, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Hempstead Village, New York",
    "hero": "Hempstead Village has its own history and identity within the larger Hempstead area. Specify the incorporated village rather than using Hempstead to mean the entire town. The closing office can confirm the correct jurisdiction for the parcel. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Hempstead Village file",
    "localNote": "Specify the incorporated village rather than using Hempstead to mean the entire town. The closing office can confirm the correct jurisdiction for the parcel. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Hempstead Village transaction",
    "why": [
      "Hempstead Village has its own history and identity within the larger Hempstead area. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Specify the incorporated village rather than using Hempstead to mean the entire town. The closing office can confirm the correct jurisdiction for the parcel. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Specify the incorporated village rather than using Hempstead to mean the entire town. The closing office can confirm the correct jurisdiction for the parcel. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Hempstead Village request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Is this page for the town or the village?",
        "a": "This page covers Hempstead Village. If your property is elsewhere in the town, give its actual community and address so the review follows the correct location."
      },
      {
        "q": "What should I send for a Hempstead Village review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Specify the incorporated village rather than using Hempstead to mean the entire town. The closing office can confirm the correct jurisdiction for the parcel."
      },
      {
        "q": "Which state rules apply to a Hempstead Village deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "freeport",
      "huntington",
      "islip"
    ],
    "blurb": "Hempstead Village has its own history and identity within the larger Hempstead area.",
    "summaryFees": true
  },
  {
    "slug": "freeport",
    "name": "Freeport",
    "state": "NY",
    "stateName": "New York",
    "county": "Nassau County",
    "formName": "Freeport-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Freeport, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Freeport, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Freeport, New York",
    "hero": "Freeport Memorial Library preserves the village’s institutions, parks and buildings in its history encyclopedia. Identify the Freeport village property and any known liens or seller-document questions rather than relying on a familiar local address. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Freeport file",
    "localNote": "Identify the Freeport village property and any known liens or seller-document questions rather than relying on a familiar local address. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Freeport transaction",
    "why": [
      "Freeport Memorial Library preserves the village’s institutions, parks and buildings in its history encyclopedia. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Identify the Freeport village property and any known liens or seller-document questions rather than relying on a familiar local address. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Identify the Freeport village property and any known liens or seller-document questions rather than relying on a familiar local address. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Freeport request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Should I include known liens in the request?",
        "a": "Yes. Describe what you know and provide any available payoff information. The closing office confirms the title and payoff requirements for the specific property."
      },
      {
        "q": "What should I send for a Freeport review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Identify the Freeport village property and any known liens or seller-document questions rather than relying on a familiar local address."
      },
      {
        "q": "Which state rules apply to a Freeport deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "huntington",
      "islip",
      "babylon"
    ],
    "blurb": "Freeport Memorial Library preserves the village’s institutions, parks and buildings in its history encyclopedia.",
    "summaryFees": true
  },
  {
    "slug": "huntington",
    "name": "Huntington Town",
    "state": "NY",
    "stateName": "New York",
    "county": "Suffolk County",
    "formName": "Huntington-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Huntington Town, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Huntington Town, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Huntington Town, New York",
    "hero": "Huntington’s early history includes waterfront communities such as Cold Spring Harbor and Centerport. Identify the community within Huntington Town and the exact parcel. A town-wide label can leave the actual location unclear. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Huntington Town file",
    "localNote": "Identify the community within Huntington Town and the exact parcel. A town-wide label can leave the actual location unclear. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Huntington Town transaction",
    "why": [
      "Huntington’s early history includes waterfront communities such as Cold Spring Harbor and Centerport. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Identify the community within Huntington Town and the exact parcel. A town-wide label can leave the actual location unclear. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Identify the community within Huntington Town and the exact parcel. A town-wide label can leave the actual location unclear. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Huntington Town request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Why include the hamlet or community?",
        "a": "Huntington Town covers more than one community. The address and parcel details help the closing office connect both contracts to the same property."
      },
      {
        "q": "What should I send for a Huntington Town review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Identify the community within Huntington Town and the exact parcel. A town-wide label can leave the actual location unclear."
      },
      {
        "q": "Which state rules apply to a Huntington Town deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "islip",
      "babylon"
    ],
    "blurb": "Huntington’s early history includes waterfront communities such as Cold Spring Harbor and Centerport.",
    "summaryFees": true
  },
  {
    "slug": "islip",
    "name": "Islip Town",
    "state": "NY",
    "stateName": "New York",
    "county": "Suffolk County",
    "formName": "Islip-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Islip Town, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Islip Town, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Islip Town, New York",
    "hero": "Islip’s official history describes ocean beaches, bays and historic villages within the town. Name the actual Islip Town community and identify the property interest being transferred. Do not substitute a regional beach or bay description for the contract address. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Islip Town file",
    "localNote": "Name the actual Islip Town community and identify the property interest being transferred. Do not substitute a regional beach or bay description for the contract address. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Islip Town transaction",
    "why": [
      "Islip’s official history describes ocean beaches, bays and historic villages within the town. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Name the actual Islip Town community and identify the property interest being transferred. Do not substitute a regional beach or bay description for the contract address. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Name the actual Islip Town community and identify the property interest being transferred. Do not substitute a regional beach or bay description for the contract address. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Islip Town request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Does an Islip village address change the paperwork?",
        "a": "Ask the closing office which local records and documents apply. Provide the exact address and community instead of assuming the whole town uses an identical file."
      },
      {
        "q": "What should I send for a Islip Town review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Name the actual Islip Town community and identify the property interest being transferred. Do not substitute a regional beach or bay description for the contract address."
      },
      {
        "q": "Which state rules apply to a Islip Town deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "babylon"
    ],
    "blurb": "Islip’s official history describes ocean beaches, bays and historic villages within the town.",
    "summaryFees": true
  },
  {
    "slug": "babylon",
    "name": "Babylon Town",
    "state": "NY",
    "stateName": "New York",
    "county": "Suffolk County",
    "formName": "Babylon-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Babylon Town, NY | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Babylon Town, New York. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Babylon Town, New York",
    "hero": "Babylon’s official history describes how railroads and later automobiles shaped the town’s growth. Distinguish Babylon Town from Babylon Village and give the contract address when you submit a deal. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Babylon Town file",
    "localNote": "Distinguish Babylon Town from Babylon Village and give the contract address when you submit a deal. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New York transaction.",
    "whyHeading": "Review the actual Babylon Town transaction",
    "why": [
      "Babylon’s official history describes how railroads and later automobiles shaped the town’s growth. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Distinguish Babylon Town from Babylon Village and give the contract address when you submit a deal. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Distinguish Babylon Town from Babylon Village and give the contract address when you submit a deal. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Babylon Town request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New York closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Which Babylon location should I enter?",
        "a": "Use the actual property address and community. Tell us whether you mean the town or incorporated village so the location is not inferred from the name."
      },
      {
        "q": "What should I send for a Babylon Town review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Distinguish Babylon Town from Babylon Village and give the contract address when you submit a deal."
      },
      {
        "q": "Which state rules apply to a Babylon Town deal?",
        "a": "This page concerns New York property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "new-york-city",
      "brooklyn",
      "queens"
    ],
    "blurb": "Babylon’s official history describes how railroads and later automobiles shaped the town’s growth.",
    "summaryFees": true
  },
  {
    "slug": "jersey-city",
    "name": "Jersey City",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Hudson County",
    "formName": "Jersey-City-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Jersey City, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Jersey City, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Jersey City, New Jersey",
    "hero": "Jersey City’s library timeline traces communities including Paulus Hook, Harsimus and Bergen. For a Jersey City request, identify the property interest and any association or ownership approvals still outstanding. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Jersey City file",
    "localNote": "For a Jersey City request, identify the property interest and any association or ownership approvals still outstanding. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Jersey City transaction",
    "why": [
      "Jersey City’s library timeline traces communities including Paulus Hook, Harsimus and Bergen. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Jersey City request, identify the property interest and any association or ownership approvals still outstanding. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Jersey City request, identify the property interest and any association or ownership approvals still outstanding. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Jersey City request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if association documents are outstanding?",
        "a": "List the missing documents and any contract deadlines. Your advisers and closing office can confirm what is required before the purchase and resale can proceed."
      },
      {
        "q": "What should I send for a Jersey City review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Jersey City request, identify the property interest and any association or ownership approvals still outstanding."
      },
      {
        "q": "Which state rules apply to a Jersey City deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "union-city",
      "bayonne",
      "east-orange"
    ],
    "blurb": "Jersey City’s library timeline traces communities including Paulus Hook, Harsimus and Bergen.",
    "summaryFees": true
  },
  {
    "slug": "newark",
    "name": "Newark",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Essex County",
    "formName": "Newark-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Newark, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Newark, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Newark, New Jersey",
    "hero": "Newark Public Library’s timeline records the city’s industrial and community history. Describe the actual Newark property’s use and occupancy rather than assuming its past determines today’s contract requirements. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Newark file",
    "localNote": "Describe the actual Newark property’s use and occupancy rather than assuming its past determines today’s contract requirements. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Newark transaction",
    "why": [
      "Newark Public Library’s timeline records the city’s industrial and community history. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Describe the actual Newark property’s use and occupancy rather than assuming its past determines today’s contract requirements. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Describe the actual Newark property’s use and occupancy rather than assuming its past determines today’s contract requirements. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Newark request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Should I describe how the Newark property is used?",
        "a": "Yes. State the current use and occupancy information you have, and flag any unresolved contract conditions. The review concerns the present property and agreements."
      },
      {
        "q": "What should I send for a Newark review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Describe the actual Newark property’s use and occupancy rather than assuming its past determines today’s contract requirements."
      },
      {
        "q": "Which state rules apply to a Newark deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "bayonne",
      "east-orange",
      "west-orange"
    ],
    "blurb": "Newark Public Library’s timeline records the city’s industrial and community history.",
    "summaryFees": true
  },
  {
    "slug": "elizabeth",
    "name": "Elizabeth",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Union County",
    "formName": "Elizabeth-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Elizabeth, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Elizabeth, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Elizabeth, New Jersey",
    "hero": "Elizabeth’s historical society describes its origins as Elizabethtown and its ties to transportation and commerce. For an Elizabeth submission, identify the seller’s signing authority and any entity documents the closing office has requested. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Elizabeth file",
    "localNote": "For an Elizabeth submission, identify the seller’s signing authority and any entity documents the closing office has requested. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Elizabeth transaction",
    "why": [
      "Elizabeth’s historical society describes its origins as Elizabethtown and its ties to transportation and commerce. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For an Elizabeth submission, identify the seller’s signing authority and any entity documents the closing office has requested. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For an Elizabeth submission, identify the seller’s signing authority and any entity documents the closing office has requested. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Elizabeth request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if the seller is an entity?",
        "a": "Include the entity name and the documents you have. The closing office and advisers confirm who can sign and what supporting records are required."
      },
      {
        "q": "What should I send for a Elizabeth review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For an Elizabeth submission, identify the seller’s signing authority and any entity documents the closing office has requested."
      },
      {
        "q": "Which state rules apply to a Elizabeth deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "east-orange",
      "west-orange",
      "montclair"
    ],
    "blurb": "Elizabeth’s historical society describes its origins as Elizabethtown and its ties to transportation and commerce.",
    "summaryFees": true
  },
  {
    "slug": "paterson",
    "name": "Paterson",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Passaic County",
    "formName": "Paterson-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Paterson, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Paterson, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Paterson, New Jersey",
    "hero": "Paterson grew around the Great Falls and water raceways that supported manufacturing mills. A former industrial setting is local context, not proof of a property’s present use. Tell us what your Paterson contracts actually cover. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Paterson file",
    "localNote": "A former industrial setting is local context, not proof of a property’s present use. Tell us what your Paterson contracts actually cover. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Paterson transaction",
    "why": [
      "Paterson grew around the Great Falls and water raceways that supported manufacturing mills. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "A former industrial setting is local context, not proof of a property’s present use. Tell us what your Paterson contracts actually cover. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "A former industrial setting is local context, not proof of a property’s present use. Tell us what your Paterson contracts actually cover. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Paterson request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Can a Paterson request involve a nonresidential property?",
        "a": "Describe the property and proposed structure accurately. This page does not promise eligibility; the actual purchase, resale and funding terms require review."
      },
      {
        "q": "What should I send for a Paterson review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. A former industrial setting is local context, not proof of a property’s present use. Tell us what your Paterson contracts actually cover."
      },
      {
        "q": "Which state rules apply to a Paterson deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "west-orange",
      "montclair",
      "perth-amboy"
    ],
    "blurb": "Paterson grew around the Great Falls and water raceways that supported manufacturing mills.",
    "summaryFees": true
  },
  {
    "slug": "union-city",
    "name": "Union City",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Hudson County",
    "formName": "Union-City-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Union City, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Union City, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Union City, New Jersey",
    "hero": "Union City formed when Union Hill and West Hoboken joined together. Keep Union City distinct from Union Township in your request and give the precise street address. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Union City file",
    "localNote": "Keep Union City distinct from Union Township in your request and give the precise street address. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Union City transaction",
    "why": [
      "Union City formed when Union Hill and West Hoboken joined together. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Keep Union City distinct from Union Township in your request and give the precise street address. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Keep Union City distinct from Union Township in your request and give the precise street address. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Union City request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Is Union City the same as Union Township?",
        "a": "No. This page covers Union City in Hudson County. Use the correct municipality and address so neither the funding review nor the closing file relies on the wrong location."
      },
      {
        "q": "What should I send for a Union City review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Keep Union City distinct from Union Township in your request and give the precise street address."
      },
      {
        "q": "Which state rules apply to a Union City deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "montclair",
      "perth-amboy",
      "edison"
    ],
    "blurb": "Union City formed when Union Hill and West Hoboken joined together.",
    "summaryFees": true
  },
  {
    "slug": "bayonne",
    "name": "Bayonne",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Hudson County",
    "formName": "Bayonne-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Bayonne, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Bayonne, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Bayonne, New Jersey",
    "hero": "Bayonne’s official county visitor guide includes Cape Liberty Cruise Port among its landmarks. For a Bayonne deal, send the actual lot or unit details and identify any title questions already raised. A port-area description does not establish a parcel’s status. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Bayonne file",
    "localNote": "For a Bayonne deal, send the actual lot or unit details and identify any title questions already raised. A port-area description does not establish a parcel’s status. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Bayonne transaction",
    "why": [
      "Bayonne’s official county visitor guide includes Cape Liberty Cruise Port among its landmarks. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Bayonne deal, send the actual lot or unit details and identify any title questions already raised. A port-area description does not establish a parcel’s status. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Bayonne deal, send the actual lot or unit details and identify any title questions already raised. A port-area description does not establish a parcel’s status. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Bayonne request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if title review is already under way?",
        "a": "Include the closing office’s contact details and any unresolved items you can share. The file can then be reviewed against the actual purchase and resale plan."
      },
      {
        "q": "What should I send for a Bayonne review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Bayonne deal, send the actual lot or unit details and identify any title questions already raised. A port-area description does not establish a parcel’s status."
      },
      {
        "q": "Which state rules apply to a Bayonne deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "perth-amboy",
      "edison",
      "fort-lee"
    ],
    "blurb": "Bayonne’s official county visitor guide includes Cape Liberty Cruise Port among its landmarks.",
    "summaryFees": true
  },
  {
    "slug": "east-orange",
    "name": "East Orange",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Essex County",
    "formName": "East-Orange-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in East Orange, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in East Orange, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in East Orange, New Jersey",
    "hero": "East Orange’s city history traces its earlier connection with Newark and the Oranges. Do not confuse an East Orange property with neighboring Orange municipalities. Match the address and seller across both contracts. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the East Orange file",
    "localNote": "Do not confuse an East Orange property with neighboring Orange municipalities. Match the address and seller across both contracts. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual East Orange transaction",
    "why": [
      "East Orange’s city history traces its earlier connection with Newark and the Oranges. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Do not confuse an East Orange property with neighboring Orange municipalities. Match the address and seller across both contracts. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Do not confuse an East Orange property with neighboring Orange municipalities. Match the address and seller across both contracts. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the East Orange request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Why verify the municipality in the contracts?",
        "a": "Similar place names do not identify the same property. Flag any inconsistent address or municipality wording for the closing office before scheduling the two transactions."
      },
      {
        "q": "What should I send for a East Orange review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Do not confuse an East Orange property with neighboring Orange municipalities. Match the address and seller across both contracts."
      },
      {
        "q": "Which state rules apply to a East Orange deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "edison",
      "fort-lee",
      "teaneck"
    ],
    "blurb": "East Orange’s city history traces its earlier connection with Newark and the Oranges.",
    "summaryFees": true
  },
  {
    "slug": "west-orange",
    "name": "West Orange",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Essex County",
    "formName": "West-Orange-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in West Orange, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in West Orange, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in West Orange, New Jersey",
    "hero": "West Orange’s official history records its earlier name, Fairmount. For a West Orange purchase, give the current property address and identify any open buyer-contingency deadlines. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the West Orange file",
    "localNote": "For a West Orange purchase, give the current property address and identify any open buyer-contingency deadlines. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual West Orange transaction",
    "why": [
      "West Orange’s official history records its earlier name, Fairmount. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a West Orange purchase, give the current property address and identify any open buyer-contingency deadlines. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a West Orange purchase, give the current property address and identify any open buyer-contingency deadlines. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the West Orange request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if the end buyer still has contingencies?",
        "a": "Describe them and their deadlines in the submission. The review should not treat a conditional resale as ready to close without the required information."
      },
      {
        "q": "What should I send for a West Orange review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a West Orange purchase, give the current property address and identify any open buyer-contingency deadlines."
      },
      {
        "q": "Which state rules apply to a West Orange deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "fort-lee",
      "teaneck",
      "woodbridge"
    ],
    "blurb": "West Orange’s official history records its earlier name, Fairmount.",
    "summaryFees": true
  },
  {
    "slug": "montclair",
    "name": "Montclair",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Essex County",
    "formName": "Montclair-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Montclair, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Montclair, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Montclair, New Jersey",
    "hero": "Montclair’s official history connects the community with the land extending west from Newark toward First Mountain. For a Montclair deal, identify the property and any known permit or alteration questions without assuming an older building has a defect. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Montclair file",
    "localNote": "For a Montclair deal, identify the property and any known permit or alteration questions without assuming an older building has a defect. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Montclair transaction",
    "why": [
      "Montclair’s official history connects the community with the land extending west from Newark toward First Mountain. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Montclair deal, identify the property and any known permit or alteration questions without assuming an older building has a defect. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Montclair deal, identify the property and any known permit or alteration questions without assuming an older building has a defect. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Montclair request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Should I list unresolved alteration questions?",
        "a": "Yes, if you know about them. Your advisers can decide which records matter; the funding request should accurately describe open conditions rather than hide them."
      },
      {
        "q": "What should I send for a Montclair review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Montclair deal, identify the property and any known permit or alteration questions without assuming an older building has a defect."
      },
      {
        "q": "Which state rules apply to a Montclair deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "teaneck",
      "woodbridge"
    ],
    "blurb": "Montclair’s official history connects the community with the land extending west from Newark toward First Mountain.",
    "summaryFees": true
  },
  {
    "slug": "perth-amboy",
    "name": "Perth Amboy",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Middlesex County",
    "formName": "Perth-Amboy-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Perth Amboy, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Perth Amboy, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Perth Amboy, New Jersey",
    "hero": "Perth Amboy’s official history places its beginnings at the mouth of the Raritan River. For a Perth Amboy transaction, provide the agreed prices and separately identify settlement costs already quoted. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Perth Amboy file",
    "localNote": "For a Perth Amboy transaction, provide the agreed prices and separately identify settlement costs already quoted. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Perth Amboy transaction",
    "why": [
      "Perth Amboy’s official history places its beginnings at the mouth of the Raritan River. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Perth Amboy transaction, provide the agreed prices and separately identify settlement costs already quoted. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Perth Amboy transaction, provide the agreed prices and separately identify settlement costs already quoted. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Perth Amboy request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Are settlement costs part of the published funding fee?",
        "a": "The funding schedule describes the requested funding charge. Ask the closing office for separate title, recording and settlement costs for both transactions."
      },
      {
        "q": "What should I send for a Perth Amboy review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Perth Amboy transaction, provide the agreed prices and separately identify settlement costs already quoted."
      },
      {
        "q": "Which state rules apply to a Perth Amboy deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "woodbridge"
    ],
    "blurb": "Perth Amboy’s official history places its beginnings at the mouth of the Raritan River.",
    "summaryFees": true
  },
  {
    "slug": "edison",
    "name": "Edison",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Middlesex County",
    "formName": "Edison-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Edison, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Edison, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Edison, New Jersey",
    "hero": "Edison’s official history notes its earlier name, Raritan Township, and communities including Piscatawaytown. Use the current Edison address and exact contract description. Historic community names should not replace the legal property identification. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Edison file",
    "localNote": "Use the current Edison address and exact contract description. Historic community names should not replace the legal property identification. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Edison transaction",
    "why": [
      "Edison’s official history notes its earlier name, Raritan Township, and communities including Piscatawaytown. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Use the current Edison address and exact contract description. Historic community names should not replace the legal property identification. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Use the current Edison address and exact contract description. Historic community names should not replace the legal property identification. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Edison request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if older records use a different place name?",
        "a": "Send those records to the closing office and flag the difference. It can confirm how the current address and legal description connect to the property in both contracts."
      },
      {
        "q": "What should I send for a Edison review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Use the current Edison address and exact contract description. Historic community names should not replace the legal property identification."
      },
      {
        "q": "Which state rules apply to a Edison deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "jersey-city",
      "newark",
      "elizabeth"
    ],
    "blurb": "Edison’s official history notes its earlier name, Raritan Township, and communities including Piscatawaytown.",
    "summaryFees": true
  },
  {
    "slug": "fort-lee",
    "name": "Fort Lee",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Bergen County",
    "formName": "Fort-Lee-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Fort Lee, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Fort Lee, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Fort Lee, New Jersey",
    "hero": "Fort Lee lies along the Hudson River and the western approach to the George Washington Bridge. For a Fort Lee unit or parcel, identify the interest being sold and any outstanding transfer approvals. Bridge access is location context, not an eligibility claim. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Fort Lee file",
    "localNote": "For a Fort Lee unit or parcel, identify the interest being sold and any outstanding transfer approvals. Bridge access is location context, not an eligibility claim. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Fort Lee transaction",
    "why": [
      "Fort Lee lies along the Hudson River and the western approach to the George Washington Bridge. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Fort Lee unit or parcel, identify the interest being sold and any outstanding transfer approvals. Bridge access is location context, not an eligibility claim. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Fort Lee unit or parcel, identify the interest being sold and any outstanding transfer approvals. Bridge access is location context, not an eligibility claim. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Fort Lee request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Can I request review for a unit transaction?",
        "a": "Describe the ownership form and provide the purchase and resale agreements. Ask your advisers which approvals apply; funding is not automatic for every type of unit."
      },
      {
        "q": "What should I send for a Fort Lee review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Fort Lee unit or parcel, identify the interest being sold and any outstanding transfer approvals. Bridge access is location context, not an eligibility claim."
      },
      {
        "q": "Which state rules apply to a Fort Lee deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "newark",
      "elizabeth",
      "paterson"
    ],
    "blurb": "Fort Lee lies along the Hudson River and the western approach to the George Washington Bridge.",
    "summaryFees": true
  },
  {
    "slug": "teaneck",
    "name": "Teaneck",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Bergen County",
    "formName": "Teaneck-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Teaneck, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Teaneck, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Teaneck, New Jersey",
    "hero": "Teaneck Public Library’s history describes the Teaneck Ridge and Queen Anne Road. For a Teaneck purchase, identify any seller possession terms that differ from your resale agreement. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Teaneck file",
    "localNote": "For a Teaneck purchase, identify any seller possession terms that differ from your resale agreement. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Teaneck transaction",
    "why": [
      "Teaneck Public Library’s history describes the Teaneck Ridge and Queen Anne Road. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "For a Teaneck purchase, identify any seller possession terms that differ from your resale agreement. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "For a Teaneck purchase, identify any seller possession terms that differ from your resale agreement. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Teaneck request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "What if possession dates do not match?",
        "a": "Flag the difference in the request. The parties and closing office need an agreed plan; a funding request does not settle conflicting possession terms."
      },
      {
        "q": "What should I send for a Teaneck review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. For a Teaneck purchase, identify any seller possession terms that differ from your resale agreement."
      },
      {
        "q": "Which state rules apply to a Teaneck deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "elizabeth",
      "paterson",
      "union-city"
    ],
    "blurb": "Teaneck Public Library’s history describes the Teaneck Ridge and Queen Anne Road.",
    "summaryFees": true
  },
  {
    "slug": "woodbridge",
    "name": "Woodbridge Township",
    "state": "NJ",
    "stateName": "New Jersey",
    "county": "Middlesex County",
    "formName": "Woodbridge-Wholesale-Double-Close-Form",
    "title": "Double Close Funding in Woodbridge Township, NJ | New York Wholesale Double Close",
    "description": "Transactional funding review for a wholesale double closing in Woodbridge Township, New Jersey. Submit the purchase and resale details and review published funding fees.",
    "h1Bottom": "in Woodbridge Township, New Jersey",
    "hero": "Woodbridge Township’s official history records its early settlement and printing heritage. Name the actual Woodbridge Township community and provide the parcel details rather than submitting only the township name. Our review brings the purchase, resale and proposed funding together for the specific file. Send both contracts and prices; funding can be ready in as little as 24 hours.",
    "localNoteTitle": "Prepare the Woodbridge Township file",
    "localNote": "Name the actual Woodbridge Township community and provide the parcel details rather than submitting only the township name. Ask your closing office and qualified advisers which title, disclosure and settlement requirements apply to this New Jersey transaction.",
    "whyHeading": "Review the actual Woodbridge Township transaction",
    "why": [
      "Woodbridge Township’s official history records its early settlement and printing heritage. The local history gives the area context, but your funding request is assessed on its contracts and property details.",
      "Name the actual Woodbridge Township community and provide the parcel details rather than submitting only the township name. Identify the end buyer and list unresolved conditions so the review follows the actual closing plan.",
      "Use the published fee schedule to estimate the funding charge. Confirm the written terms and separate settlement costs before deciding whether the transaction works."
    ],
    "steps": [
      {
        "title": "Submit the property details",
        "text": "Name the actual Woodbridge Township community and provide the parcel details rather than submitting only the township name. Include the purchase price, resale price and proposed closing date."
      },
      {
        "title": "Review the purchase and resale",
        "text": "We review the Woodbridge Township request using your contracts and closing-office information. Missing documents and unresolved conditions can affect whether the file proceeds."
      },
      {
        "title": "Confirm the closing instructions",
        "text": "If approved, follow the written funding terms and the New Jersey closing team’s instructions. Confirm the agreed sequence and repayment arrangements for both sales."
      }
    ],
    "faqs": [
      {
        "q": "Why include the community within Woodbridge?",
        "a": "A township label is broader than a property address. The exact location helps connect the contracts, title records and proposed closing office to the same parcel."
      },
      {
        "q": "What should I send for a Woodbridge Township review?",
        "a": "Send the exact address, both contracts, agreed prices and closing-office details. Name the actual Woodbridge Township community and provide the parcel details rather than submitting only the township name."
      },
      {
        "q": "Which state rules apply to a Woodbridge Township deal?",
        "a": "This page concerns New Jersey property. Qualified advisers and the closing office should confirm the applicable licensing, disclosure and settlement rules; New York and New Jersey should not be treated as one jurisdiction."
      },
      {
        "q": "What does transactional funding cost?",
        "a": "The published schedule starts at {{tier1Rate}} for funding up to {{tier1Cap}}, with a {{tier1Minimum}} minimum. Additional days and special arrangements can add charges. Confirm the written terms."
      },
      {
        "q": "Does submitting a deal guarantee funding?",
        "a": "No. A submission requests a review, not an approval. Funding depends on the actual purchase, resale and agreed terms."
      }
    ],
    "nearby": [
      "paterson",
      "union-city",
      "bayonne"
    ],
    "blurb": "Woodbridge Township’s official history records its early settlement and printing heritage.",
    "summaryFees": true
  }
];
