export const CONFLICTS: any[] = [{
  caseID: "CR001",
  partiesInvolved: ["John Doe", "Jane Smith"],
  description: "Dispute over property boundaries",
  evidence: ["Survey maps", "Property deed"],
  status: "Pending",
  arbitrators: ["Arbitrator1", "Arbitrator2"],
  resolutionDecision: "",
  timeline: {
    submissionDate: "2024-04-03",
    lastUpdate: "",
    resolutionDate: ""
  },
  communicationLogs: [
    { sender: "John Doe", message: "Submitted evidence for the case." },
    { sender: "Arbitrator1", message: "Case under review." }
  ],
  appeals: []
},
  {
    caseID: "CR002",
    partiesInvolved: ["Michael Johnson", "Emily Brown"],
    description: "Dispute over property ownership",
    evidence: ["Property purchase agreement", "Title deed"],
    status: "Under review",
    arbitrators: ["Arbitrator3", "Arbitrator4"],
    resolutionDecision: "",
    timeline: {
      submissionDate: "2024-04-02",
      lastUpdate: "",
      resolutionDate: ""
    },
    communicationLogs: [
      { sender: "Michael Johnson", message: "Awaiting arbitration." }
    ],
    appeals: []
  },
  {
    caseID: "CR003",
    partiesInvolved: ["David Thompson", "Alice Green"],
    description: "Dispute over land access rights",
    evidence: ["Easement agreement", "Correspondence"],
    status: "Pending",
    arbitrators: ["Arbitrator5", "Arbitrator6"],
    resolutionDecision: "",
    timeline: {
      submissionDate: "2024-04-01",
      lastUpdate: "",
      resolutionDate: ""
    },
    communicationLogs: [
      { sender: "Alice Green", message: "Initiated the conflict resolution process." }
    ],
    appeals: []
  },
  {
    caseID: "CR004",
    partiesInvolved: ["Robert Lee", "Sarah Anderson"],
    description: "Dispute over land use zoning",
    evidence: ["Zoning regulations", "Correspondence with local authorities"],
    status: "Resolved",
    arbitrators: ["Arbitrator7", "Arbitrator8"],
    resolutionDecision: "Land use zoning determined according to local regulations.",
    timeline: {
      submissionDate: "2024-03-30",
      lastUpdate: "2024-04-02",
      resolutionDate: "2024-04-05"
    },
    communicationLogs: [
      { sender: "Robert Lee", message: "Awaiting resolution." },
      { sender: "Arbitrator7", message: "Resolution reached." }
    ],
    appeals: []
  },
  {
    caseID: "CR005",
    partiesInvolved: ["William Clark", "Olivia Taylor"],
    description: "Dispute over property boundary encroachment",
    evidence: ["Property survey", "Neighbor's construction plans"],
    status: "Under review",
    arbitrators: ["Arbitrator9", "Arbitrator10"],
    resolutionDecision: "",
    timeline: {
      submissionDate: "2024-03-28",
      lastUpdate: "",
      resolutionDate: ""
    },
    communicationLogs: [
      { sender: "Olivia Taylor", message: "Filed a complaint about boundary encroachment." }
    ],
    appeals: []
  }]
