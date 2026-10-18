export type Resource = { kind: "blog" | "guides" | "case-studies"; slug: string; example?: boolean; title: string; category: string; product: string; description: string; sections: { title: string; paragraphs: string[]; steps: string[] }[] };
export const resourceCategories = ["CRM & Sales", "Real Estate", "Clinics", "Agencies", "Commerce", "AI Calling", "Business Operations"];
export const resources: Resource[] = [
  {
    "kind": "blog",
    "slug": "what-is-crm-software",
    "title": "What Is CRM Software and How Does It Work?",
    "category": "CRM & Sales",
    "product": "crm",
    "description": "Understand how customer records, leads and sales activities fit together in a useful CRM.",
    "sections": [
      {
        "title": "Start with the customer record",
        "paragraphs": [
          "CRM stands for customer relationship management. A CRM gives a team a shared place for contact details, account information, conversations and sales activity. Its value comes from making the next action clear when more than one person works with a customer.",
          "A contact is a person; an account is the business they belong to. A lead records an enquiry that needs qualification. An opportunity represents a possible sale with a stage, owner and expected value. Agree what these records mean before importing a spreadsheet."
        ],
        "steps": []
      },
      {
        "title": "Follow the work from enquiry to sale",
        "paragraphs": [
          "Consider an enquiry from an advertising campaign. Someone needs to check the requirement, assign an owner and arrange a follow-up. If the enquiry becomes a qualified opportunity, the same history should remain available through quotation and decision."
        ],
        "steps": [
          "Capture the source and customer requirement.",
          "Assign an owner and a dated next action.",
          "Qualify the opportunity and move it through agreed stages.",
          "Record the outcome and retain the customer history."
        ]
      },
      {
        "title": "Choose useful automation",
        "paragraphs": [
          "Start with a missed action that has a clear rule, such as a reminder for an overdue follow-up. Sales sequences can organize a series of activities, but should include a stopping condition when a customer responds or declines.",
          "Reports should answer a working question: which leads lack an owner, where opportunities stall, or which sources create qualified enquiries. A chart is useful only if someone knows what decision it supports."
        ],
        "steps": []
      },
      {
        "title": "Evaluate fit with a real example",
        "paragraphs": [
          "Bring one recent enquiry to a CRM demo and follow it through assignment, calls, quotation and reporting. Ask which fields and workflows are included, what must be configured and how existing data will be prepared.",
          "Melorite CRM & Growth brings these conversations into a focused sales workspace. Use the demo to confirm campaign tracking, sales orders and automation against your actual process."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "real-estate-enquiry-to-booking",
    "title": "How to Manage Real Estate Leads From Enquiry to Booking",
    "category": "Real Estate",
    "product": "real-estate",
    "description": "Keep buyer requirements, site visits and unit decisions connected throughout a property sale.",
    "sections": [
      {
        "title": "Capture the requirement before scheduling",
        "paragraphs": [
          "A buyer record should explain what the person is looking for: project, budget, configuration, location and likely timing. Keep the original source and responsible salesperson beside those details.",
          "Avoid creating a separate record for every phone call. Update the existing buyer history so another team member can understand the conversation."
        ],
        "steps": []
      },
      {
        "title": "Make the visit a working event",
        "paragraphs": [
          "A calendar entry needs a project, buyer, assigned host and confirmation status. After the visit, record preferences and objections while the conversation is fresh."
        ],
        "steps": [
          "Confirm the buyer and preferred visit time.",
          "Check project and unit availability.",
          "Assign the visit host and share the requirement.",
          "Record feedback and agree the next contact."
        ]
      },
      {
        "title": "Separate interest from commitment",
        "paragraphs": [
          "An interested buyer, a unit hold and a booking are different states. Agree who can change inventory status and when a hold expires. Keep payment and document requirements visible before treating a booking as complete."
        ],
        "steps": []
      },
      {
        "title": "Review the handoff",
        "paragraphs": [
          "Review buyers with no next action, visits awaiting feedback and bookings with incomplete documents. Melorite Real Estate can be explored around this complete journey rather than as a list of isolated screens."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "reduce-appointment-no-shows",
    "title": "How to Reduce Appointment No-Shows",
    "category": "Clinics",
    "product": "clinic",
    "description": "Build a clear appointment confirmation and rescheduling process for the front desk.",
    "sections": [
      {
        "title": "Make booking details clear",
        "paragraphs": [
          "Confirm the doctor, location, date and time in language the patient understands. Explain how to cancel or reschedule, including whom to contact when plans change.",
          "The front desk should be able to distinguish booked, confirmed, arrived, cancelled and missed appointments. Those states tell the team what action is appropriate."
        ],
        "steps": []
      },
      {
        "title": "Design reminders around the clinic",
        "paragraphs": [
          "Agree when reminders should be sent and what happens after a reply. A reminder that asks for confirmation creates work unless someone can see and act on the answer."
        ],
        "steps": [
          "Check the contact details at booking.",
          "Choose an appropriate reminder time.",
          "Offer a clear cancellation or rescheduling route.",
          "Assign unanswered confirmations to the front desk."
        ]
      },
      {
        "title": "Handle missed visits thoughtfully",
        "paragraphs": [
          "Record a missed appointment without assuming why the patient could not attend. Where appropriate, offer a new slot through the clinic’s agreed communication process. Keep sensitive clinical details out of routine scheduling messages."
        ],
        "steps": []
      },
      {
        "title": "Review the scheduling process",
        "paragraphs": [
          "Look for recurring scheduling problems such as unclear locations, difficult cancellation steps or unsuitable appointment lengths. Use actual clinic records to evaluate changes; do not assume reminders alone solve every missed visit.",
          "A Melorite Clinic demo can focus on schedules, appointment states and follow-up ownership."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "client-approval-workflows",
    "title": "How Client Approval Workflows Should Work",
    "category": "Agencies",
    "product": "agency",
    "description": "Give every deliverable a clear version, reviewer and approve-or-revise decision.",
    "sections": [
      {
        "title": "Define what is ready for review",
        "paragraphs": [
          "A client should receive a deliverable that has passed the agency’s internal check. Include the brief, intended channel and publication date where relevant, so feedback refers to the same objective."
        ],
        "steps": []
      },
      {
        "title": "Attach decisions to the version",
        "paragraphs": [
          "Approval belongs to a specific version of the work. If an asset changes after approval, agree whether it needs another review. A message saying “looks good” should not leave the team guessing which draft was approved."
        ],
        "steps": [
          "Prepare the asset and internal review.",
          "Share the exact version with the designated approver.",
          "Collect approval or a revision request.",
          "Return revised work for review when required."
        ]
      },
      {
        "title": "Keep ownership visible",
        "paragraphs": [
          "Assign one person to consolidate feedback and one person to act on it. Record the due date and who can resolve conflicting comments. A private client portal can keep these decisions close to the calendar and asset."
        ],
        "steps": []
      },
      {
        "title": "Connect approval to delivery",
        "paragraphs": [
          "An approved asset still needs a publishing owner and a planned date. Review items awaiting client feedback before promising the next batch of work. Melorite Agency connects planning, review and delivery in the same workflow."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "manage-cod-orders",
    "title": "How to Manage COD Orders Better",
    "category": "Commerce",
    "product": "commerce",
    "description": "Keep confirmation, payment status and fulfilment decisions clear for cash-on-delivery orders.",
    "sections": [
      {
        "title": "Separate order receipt from confirmation",
        "paragraphs": [
          "A new order records customer intent. Before packing a cash-on-delivery order, the team may need to confirm the address, contact details and items under its agreed order policy.",
          "Keep a visible confirmation status alongside the payment method. COD does not mean payment has already been collected."
        ],
        "steps": []
      },
      {
        "title": "Use a consistent review queue",
        "paragraphs": [
          "Agree which orders require review and how long they remain pending. Record the outcome of each contact attempt so another team member does not repeat the same call without context."
        ],
        "steps": [
          "Check item availability and address completeness.",
          "Confirm details through the agreed channel.",
          "Record changes on the order.",
          "Release confirmed orders to packing."
        ]
      },
      {
        "title": "Carry changes into fulfilment",
        "paragraphs": [
          "An address correction in a call note is not enough if the shipping record still has the old address. Confirm that the people packing and dispatching can see the agreed information."
        ],
        "steps": []
      },
      {
        "title": "Close the order loop",
        "paragraphs": [
          "Track shipment, delivery and return outcomes separately. Review the reasons for returned orders using your own records before changing confirmation rules. Melorite Commerce and approved AI Calling flows can be discussed around these handoffs."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "what-is-ai-voice-agent",
    "title": "What Is an AI Voice Agent?",
    "category": "AI Calling",
    "product": "ai-calling",
    "description": "Understand the call flow, knowledge and handoff decisions behind an AI voice assistant.",
    "sections": [
      {
        "title": "Start with the job of the call",
        "paragraphs": [
          "An AI voice agent handles spoken conversations within a configured workflow. A useful starting point is a defined task: capture an enquiry, request a preferred appointment or confirm order details.",
          "Write down what a successful call should produce. A summary without an owner or next action may still leave the original work unfinished."
        ],
        "steps": []
      },
      {
        "title": "Define knowledge and boundaries",
        "paragraphs": [
          "List the information the assistant may use, which actions it can take and when it should involve a person. Do not assume it can confirm live availability or change an order unless the relevant connection and permissions have been agreed."
        ],
        "steps": [
          "Define the caller’s likely questions.",
          "Approve the information used in answers.",
          "Specify booking or record-update actions.",
          "Set transfer and fallback rules."
        ]
      },
      {
        "title": "Plan the handoff",
        "paragraphs": [
          "A human transfer should include enough context to avoid making the caller start again. Decide what happens when the team is unavailable, the caller changes topic or the requested action cannot be completed."
        ],
        "steps": []
      },
      {
        "title": "Test outcomes before expansion",
        "paragraphs": [
          "Walk through ordinary calls and exceptions before adding a wider campaign. Review summaries, captured details and the resulting tasks. Confirm recording, communication and operational requirements with the appropriate people before launch.",
          "Melorite AI Calling demos can use your actual enquiry flow to identify the configuration and human support needed."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "blog",
    "slug": "shared-workflow-ownership",
    "title": "How to Keep Business Follow-ups From Getting Lost",
    "category": "Business Operations",
    "product": "crm",
    "description": "Use clear ownership, shared context and a dated next action to improve everyday handoffs.",
    "sections": [
      {
        "title": "Find the handoff",
        "paragraphs": [
          "Choose one repeated task that crosses people or tools. Write down where the request starts, who decides what happens next and where the final outcome is recorded.",
          "A process usually becomes difficult when the next person cannot see the requirement or assumes someone else owns it."
        ],
        "steps": []
      },
      {
        "title": "Make the next action explicit",
        "paragraphs": [
          "A status such as “in progress” does not tell a colleague what to do. Pair it with a responsible person and a dated action."
        ],
        "steps": [
          "Record the request in a shared place.",
          "Name one owner for the next step.",
          "Set a meaningful date or trigger.",
          "Record the outcome before closing the work."
        ]
      },
      {
        "title": "Automate after agreeing the rule",
        "paragraphs": [
          "A reminder can support ownership; it cannot decide an unclear responsibility. Start with one simple trigger, review exceptions and only then extend the workflow."
        ],
        "steps": []
      },
      {
        "title": "Choose software around the record",
        "paragraphs": [
          "Identify whether the central record is a lead, patient, project, order or phone conversation. That helps you choose a focused Melorite product or discuss a custom workflow without adding unnecessary tools."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "crm-setup",
    "title": "The Complete CRM Setup Guide",
    "category": "CRM & Sales",
    "product": "crm",
    "description": "Plan records, qualification, pipeline stages and follow-up ownership before bringing your team into a CRM.",
    "sections": [
      {
        "title": "1. Map the work before setup",
        "paragraphs": [
          "Start with a recent real example and the people who handled it. Describe where the enquiry or task began, the decisions made along the way and the outcome the customer expected.",
          "Write down the workflow below as a starting point. For each stage, agree an owner, entry condition and the information needed to move forward."
        ],
        "steps": [
          "Lead",
          "Qualification",
          "Follow-up",
          "Opportunity",
          "Quote",
          "Won"
        ]
      },
      {
        "title": "2. Agree records and responsibilities",
        "paragraphs": [
          "Define contacts and accounts separately, and agree when an enquiry becomes a qualified opportunity. Keep lead source, owner and next activity visible.",
          "Agree scoring criteria with the sales team. A useful score reflects an observable requirement or engagement signal, rather than a guess about the customer.",
          "Map quotation values and sales orders to the opportunity. Decide which forecast stages reflect a real customer commitment."
        ],
        "steps": []
      },
      {
        "title": "3. Prepare existing information",
        "paragraphs": [
          "Choose the records the team needs at launch. Remove obvious duplicates, check contact details and map old statuses to the new workflow. Keep a recoverable copy of source information and review a small import sample before moving the rest.",
          "Agree who may view, edit, approve or export the relevant records. Test access using an ordinary team member’s account, rather than relying on an administrator’s view."
        ],
        "steps": []
      },
      {
        "title": "4. Configure a small working flow",
        "paragraphs": [
          "Begin with the fields and actions needed for the chosen process. Add a reminder only when its trigger, recipient and stopping condition are clear.",
          "For integrations, confirm the available interfaces, matching identifiers and error handling. A proposed connection is not a confirmed integration until scope and implementation are agreed."
        ],
        "steps": [
          "Choose one record type and one team.",
          "Configure stages, owners and required information.",
          "Set the first reminder or handoff rule.",
          "Agree who reviews incomplete or failed actions."
        ]
      },
      {
        "title": "5. Test normal work and exceptions",
        "paragraphs": [
          "Run one ordinary example from start to finish, then test a missing contact, reassignment, cancellation and overdue action. Check what the customer and each team role can see.",
          "Review reports against the underlying records. Confirm what counts as an enquiry, completed action or successful outcome before using totals to guide decisions."
        ],
        "steps": [
          "Can a colleague find the history without asking for a separate message?",
          "Does each active record have an owner and next action?",
          "Can the team recover from an incorrect update?",
          "Are unresolved exceptions visible to a named person?"
        ]
      },
      {
        "title": "6. Launch with a review plan",
        "paragraphs": [
          "Give the team a short walkthrough using its own workflow. Name the person handling setup questions and explain how requests for changes will be collected.",
          "Review the first working cycle before adding fields or automation. Bring the agreed workflow to a Melorite demo to confirm product fit, configuration needs and the support included in the proposed setup."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "real-estate-sales-workflow",
    "title": "The Complete Real Estate Sales Workflow Guide",
    "category": "Real Estate",
    "product": "real-estate",
    "description": "Plan the buyer journey from first enquiry through site visits, booking, payments and handover.",
    "sections": [
      {
        "title": "1. Map the work before setup",
        "paragraphs": [
          "Start with a recent real example and the people who handled it. Describe where the enquiry or task began, the decisions made along the way and the outcome the customer expected.",
          "Write down the workflow below as a starting point. For each stage, agree an owner, entry condition and the information needed to move forward."
        ],
        "steps": [
          "Enquiry",
          "Lead",
          "Site Visit",
          "Unit Selection",
          "Booking",
          "Payment",
          "Handover"
        ]
      },
      {
        "title": "2. Agree records and responsibilities",
        "paragraphs": [
          "Choose how projects, towers and units are identified. Define available, held and booked states, who can change them and how expired holds are released.",
          "Keep buyer requirements and channel partner attribution on the buyer record. A site visit should carry the project, host and next follow-up.",
          "Agree booking documents, payment schedules and handover requirements. Assign an owner for exceptions rather than hiding them in general notes."
        ],
        "steps": []
      },
      {
        "title": "3. Prepare existing information",
        "paragraphs": [
          "Choose the records the team needs at launch. Remove obvious duplicates, check contact details and map old statuses to the new workflow. Keep a recoverable copy of source information and review a small import sample before moving the rest.",
          "Agree who may view, edit, approve or export the relevant records. Test access using an ordinary team member’s account, rather than relying on an administrator’s view."
        ],
        "steps": []
      },
      {
        "title": "4. Configure a small working flow",
        "paragraphs": [
          "Begin with the fields and actions needed for the chosen process. Add a reminder only when its trigger, recipient and stopping condition are clear.",
          "For integrations, confirm the available interfaces, matching identifiers and error handling. A proposed connection is not a confirmed integration until scope and implementation are agreed."
        ],
        "steps": [
          "Choose one record type and one team.",
          "Configure stages, owners and required information.",
          "Set the first reminder or handoff rule.",
          "Agree who reviews incomplete or failed actions."
        ]
      },
      {
        "title": "5. Test normal work and exceptions",
        "paragraphs": [
          "Run one ordinary example from start to finish, then test a missing contact, reassignment, cancellation and overdue action. Check what the customer and each team role can see.",
          "Review reports against the underlying records. Confirm what counts as an enquiry, completed action or successful outcome before using totals to guide decisions."
        ],
        "steps": [
          "Can a colleague find the history without asking for a separate message?",
          "Does each active record have an owner and next action?",
          "Can the team recover from an incorrect update?",
          "Are unresolved exceptions visible to a named person?"
        ]
      },
      {
        "title": "6. Launch with a review plan",
        "paragraphs": [
          "Give the team a short walkthrough using its own workflow. Name the person handling setup questions and explain how requests for changes will be collected.",
          "Review the first working cycle before adding fields or automation. Bring the agreed workflow to a Melorite demo to confirm product fit, configuration needs and the support included in the proposed setup."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "agency-client-management",
    "title": "The Agency Client Management Guide",
    "category": "Agencies",
    "product": "agency",
    "description": "Build a client delivery process connecting onboarding, planning, production, approvals and reporting.",
    "sections": [
      {
        "title": "1. Map the work before setup",
        "paragraphs": [
          "Start with a recent real example and the people who handled it. Describe where the enquiry or task began, the decisions made along the way and the outcome the customer expected.",
          "Write down the workflow below as a starting point. For each stage, agree an owner, entry condition and the information needed to move forward."
        ],
        "steps": [
          "Client",
          "Onboarding",
          "Strategy",
          "Calendar",
          "Production",
          "Approval",
          "Publishing",
          "Reporting"
        ]
      },
      {
        "title": "2. Agree records and responsibilities",
        "paragraphs": [
          "Define the retainer, deliverables and people who can approve work. Keep internal assignments distinct from the information clients should see.",
          "Plan the content calendar around production and review deadlines. Store feedback against a specific asset version so approval remains meaningful.",
          "Agree how publishing, reporting and invoices are tracked. A completed asset and a completed monthly retainer are different milestones."
        ],
        "steps": []
      },
      {
        "title": "3. Prepare existing information",
        "paragraphs": [
          "Choose the records the team needs at launch. Remove obvious duplicates, check contact details and map old statuses to the new workflow. Keep a recoverable copy of source information and review a small import sample before moving the rest.",
          "Agree who may view, edit, approve or export the relevant records. Test access using an ordinary team member’s account, rather than relying on an administrator’s view."
        ],
        "steps": []
      },
      {
        "title": "4. Configure a small working flow",
        "paragraphs": [
          "Begin with the fields and actions needed for the chosen process. Add a reminder only when its trigger, recipient and stopping condition are clear.",
          "For integrations, confirm the available interfaces, matching identifiers and error handling. A proposed connection is not a confirmed integration until scope and implementation are agreed."
        ],
        "steps": [
          "Choose one record type and one team.",
          "Configure stages, owners and required information.",
          "Set the first reminder or handoff rule.",
          "Agree who reviews incomplete or failed actions."
        ]
      },
      {
        "title": "5. Test normal work and exceptions",
        "paragraphs": [
          "Run one ordinary example from start to finish, then test a missing contact, reassignment, cancellation and overdue action. Check what the customer and each team role can see.",
          "Review reports against the underlying records. Confirm what counts as an enquiry, completed action or successful outcome before using totals to guide decisions."
        ],
        "steps": [
          "Can a colleague find the history without asking for a separate message?",
          "Does each active record have an owner and next action?",
          "Can the team recover from an incorrect update?",
          "Are unresolved exceptions visible to a named person?"
        ]
      },
      {
        "title": "6. Launch with a review plan",
        "paragraphs": [
          "Give the team a short walkthrough using its own workflow. Name the person handling setup questions and explain how requests for changes will be collected.",
          "Review the first working cycle before adding fields or automation. Bring the agreed workflow to a Melorite demo to confirm product fit, configuration needs and the support included in the proposed setup."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "ai-calling-implementation",
    "title": "The AI Calling Implementation Guide",
    "category": "AI Calling",
    "product": "ai-calling",
    "description": "Define call goals, approved knowledge, record updates and human handoffs before launching a calling workflow.",
    "sections": [
      {
        "title": "1. Map the work before setup",
        "paragraphs": [
          "Start with a recent real example and the people who handled it. Describe where the enquiry or task began, the decisions made along the way and the outcome the customer expected.",
          "Write down the workflow below as a starting point. For each stage, agree an owner, entry condition and the information needed to move forward."
        ],
        "steps": [
          "Lead",
          "Call",
          "Conversation",
          "Qualification",
          "CRM Update",
          "Human Follow-up"
        ]
      },
      {
        "title": "2. Agree records and responsibilities",
        "paragraphs": [
          "Choose one repeatable conversation and define its outcome. Specify inbound or outbound scope and the approved contact list and communication process.",
          "Prepare approved answers, questions and action boundaries. Define what to do when information is missing, the caller changes topic or a system is unavailable.",
          "Specify which records may be read or changed, which booking details require confirmation and when a person must take over. Agree recording and operational requirements before launch."
        ],
        "steps": []
      },
      {
        "title": "3. Prepare existing information",
        "paragraphs": [
          "Choose the records the team needs at launch. Remove obvious duplicates, check contact details and map old statuses to the new workflow. Keep a recoverable copy of source information and review a small import sample before moving the rest.",
          "Agree who may view, edit, approve or export the relevant records. Test access using an ordinary team member’s account, rather than relying on an administrator’s view."
        ],
        "steps": []
      },
      {
        "title": "4. Configure a small working flow",
        "paragraphs": [
          "Begin with the fields and actions needed for the chosen process. Add a reminder only when its trigger, recipient and stopping condition are clear.",
          "For integrations, confirm the available interfaces, matching identifiers and error handling. A proposed connection is not a confirmed integration until scope and implementation are agreed."
        ],
        "steps": [
          "Choose one record type and one team.",
          "Configure stages, owners and required information.",
          "Set the first reminder or handoff rule.",
          "Agree who reviews incomplete or failed actions."
        ]
      },
      {
        "title": "5. Test normal work and exceptions",
        "paragraphs": [
          "Run one ordinary example from start to finish, then test a missing contact, reassignment, cancellation and overdue action. Check what the customer and each team role can see.",
          "Review reports against the underlying records. Confirm what counts as an enquiry, completed action or successful outcome before using totals to guide decisions."
        ],
        "steps": [
          "Can a colleague find the history without asking for a separate message?",
          "Does each active record have an owner and next action?",
          "Can the team recover from an incorrect update?",
          "Are unresolved exceptions visible to a named person?"
        ]
      },
      {
        "title": "6. Launch with a review plan",
        "paragraphs": [
          "Give the team a short walkthrough using its own workflow. Name the person handling setup questions and explain how requests for changes will be collected.",
          "Review the first working cycle before adding fields or automation. Bring the agreed workflow to a Melorite demo to confirm product fit, configuration needs and the support included in the proposed setup."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "property-sales-desk",
    "title": "From enquiry to a clearer buyer journey",
    "category": "Real Estate",
    "product": "real-estate",
    "example": true,
    "description": "An illustrative property sales team. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative property sales team. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "Buyer requirements, visit notes and unit availability are maintained separately. The sales desk has to reconstruct each conversation before answering the next question."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Plan one buyer record alongside project inventory. Give every visit a host, capture feedback on the buyer timeline and connect the selected unit to the booking checklist.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Enquiry",
          "Buyer qualification",
          "Site visit",
          "Unit selection",
          "Booking",
          "Payment review"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is a shared buyer history and a visible next action. In a real implementation, the team would review missing follow-ups, unrecorded visits and incomplete bookings before and after launch.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "clinic-front-desk",
    "title": "A calmer day at the clinic front desk",
    "category": "Clinics",
    "product": "clinic",
    "example": true,
    "description": "An illustrative multi-doctor clinic. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative multi-doctor clinic. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "The front desk manages bookings in one register while doctors keep separate patient notes. Rescheduling and follow-up requests move through messages."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Start with doctor calendars, clear appointment states and a shared patient timeline. Keep billing linked to the visit and assign follow-up requests to a responsible person.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Appointment",
          "Confirmation",
          "Check-in",
          "Consultation",
          "Billing",
          "Follow-up"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is clearer scheduling and fewer disconnected handoffs. Appointment status accuracy and unresolved follow-ups would be reviewed using actual clinic records.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "agency-client-approvals",
    "title": "Client approvals with the context attached",
    "category": "Agencies",
    "product": "agency",
    "example": true,
    "description": "An illustrative creative agency. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative creative agency. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "Briefs, calendar plans and approval messages are spread across email and chat. The team cannot always tell which version a client approved."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Bring the content calendar, asset versions and review decisions into a focused client portal. Keep internal assignments separate from client-facing updates.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Brief",
          "Plan",
          "Create",
          "Internal review",
          "Client approval",
          "Delivery"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is one visible decision on each version of the work. Review time and repeated revision requests could be assessed once a verified customer implementation is available.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "sales-follow-up",
    "title": "Give every sales enquiry a clear next step",
    "category": "CRM & Sales",
    "product": "crm",
    "example": true,
    "description": "An illustrative growing sales team. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative growing sales team. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "Enquiries arrive from several sources, but the owner and next contact are not consistently recorded. Managers request separate spreadsheets to understand pipeline movement."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Agree qualification stages, lead routing and a small set of required fields. Add follow-up reminders and review campaign sources against qualified opportunities.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Capture",
          "Assign",
          "Qualify",
          "Follow up",
          "Quote",
          "Decision"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is a pipeline that the team can act on together. A real evaluation would compare overdue activities and ownerless leads using the business’s own data.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "commerce-order-desk",
    "title": "An order desk ready for the next step",
    "category": "Commerce",
    "product": "commerce",
    "example": true,
    "description": "An illustrative online retail brand. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative online retail brand. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "Cash-on-delivery confirmation, address changes and fulfilment status are kept in separate tools. The packing team has to check messages before shipping."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Use one order record for confirmation status, address corrections and dispatch decisions. Keep stock and customer history visible to the people handling the order.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Order",
          "Confirmation",
          "Payment status",
          "Packing",
          "Shipping",
          "Delivery"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is a dependable handoff from customer confirmation to packing. Any change in returns or order errors would need measured, verified evidence.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  },
  {
    "kind": "case-studies",
    "slug": "calling-to-appointment",
    "title": "Connect the call to the appointment",
    "category": "AI Calling",
    "product": "ai-calling",
    "example": true,
    "description": "An illustrative service business. An example of how a focused Melorite workflow could be planned.",
    "sections": [
      {
        "title": "The business",
        "paragraphs": [
          "An illustrative service business. This scenario is fictional and is provided to demonstrate the workflow and case study format. It is not a customer endorsement or a report of achieved results."
        ],
        "steps": []
      },
      {
        "title": "The challenge",
        "paragraphs": [
          "Calls arrive while the team is busy. Enquiries and preferred appointment times are captured inconsistently, leaving people to call back without the original context."
        ],
        "steps": []
      },
      {
        "title": "The proposed implementation",
        "paragraphs": [
          "Define an approved enquiry flow, booking boundaries and a human handoff. Connect the summary and requested next action to the relevant customer record.",
          "Discovery would confirm the scope, available data, user access and support requirements before any implementation begins."
        ],
        "steps": []
      },
      {
        "title": "The connected workflow",
        "paragraphs": [
          "The following stages show the proposed handoffs. Each stage needs an owner, enough context and an agreed next action."
        ],
        "steps": [
          "Call",
          "Understand",
          "Qualify",
          "Preferred slot",
          "Record update",
          "Team follow-up"
        ]
      },
      {
        "title": "What success would look like",
        "paragraphs": [
          "The intended outcome is a usable record after the call. Booking accuracy, escalation handling and customer experience would be checked during an agreed trial, without assuming a performance result.",
          "No customer metrics, testimonials or measured outcomes are claimed in this example."
        ],
        "steps": []
      }
    ]
  }
];
export const resourceHref = (resource: Resource) => `/resources/${resource.kind}/${resource.slug}`;
export const resourceSections = [
 { slug: "blog", title: "Blog", description: "Practical articles for the decisions and tasks behind everyday business." },
 { slug: "guides", title: "Guides", description: "Step-by-step guidance for setting up a complete business workflow." },
 { slug: "case-studies", title: "Case Studies", description: "Illustrative business workflows. Explore the challenge, proposed setup and intended outcome in each clearly marked example." },
] as const;
// Case studies await verified customer permission, implementation details and outcomes.
// Required editorial fields: business, industry, challenge, product, implementation, workflow, result.
