
const servicesData = [
  {
    id: 1,
    title: "Full Vehicle Inspection",
    shortDescription:
      "Engine is the heart of your car, and any issues can affect performance.",
    image: "/services/inspection.webp",
    longDescription:
      "Our Full Vehicle Inspection covers every aspect of your vehicle including brakes, engine, transmission, suspension, and safety systems. We ensure early detection of problems to keep your vehicle running smoothly and reliably.",
    otherImages: [
      "/assets/services/inspection-1.jpg",
      "/assets/services/inspection-2.jpg",
    ],
    extraData: {
      checklist: [
        {
          title: "Engine Health",
          description: "Detailed analysis of engine efficiency and performance.",
        },
        {
          title: "Brake System",
          description: "Inspection of brake pads, rotors, and fluid levels.",
        },
        {
          title: "Safety Features",
          description: "Ensuring airbags, sensors, and electronics are functional.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    shortDescription:
      "Motor is the core of your automobile any issue can impact its efficiency.",
    image: "/services/diagnostics.webp",
    longDescription:
      "We use advanced diagnostic tools to identify faults in your engine’s performance, sensors, and electronics. This ensures accurate troubleshooting and efficient repair solutions.",
    otherImages: ["/assets/services/diagnostics-1.jpg"],
    extraData: {
      checklist: [
        {
          title: "Error Codes",
          description: "Scanning ECU for stored error codes.",
        },
        {
          title: "Fuel System",
          description: "Checking injectors, fuel pump, and air intake.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Brake System Repair",
    shortDescription:
      "Engine is the heart of your vehicle, and any issues can affect cars.",
    image: "/services/brake.webp",
    longDescription:
      "Our Brake System Repair service ensures your car’s safety with complete inspection of brake pads, discs, rotors, and fluid systems. Reliable braking guarantees peace of mind.",
    otherImages: [],
    extraData: {
      checklist: [
        {
          title: "Brake Pads",
          description: "Replacing worn-out pads with premium quality material.",
        },
        {
          title: "Brake Fluid",
          description: "Checking and refilling hydraulic brake fluid.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Power Steering Fluid",
    shortDescription:
      "Motor is the soul of your car, and any problems can impact its efficiency.",
    image: "/services/steering.webp",
    longDescription:
      "Our Power Steering Fluid service checks for leaks, contamination, and fluid levels to ensure smooth steering operation and long-lasting components.",
    otherImages: [],
    extraData: {
      checklist: [
        {
          title: "Fluid Check",
          description: "Inspecting power steering fluid quality and quantity.",
        },
        {
          title: "Leak Detection",
          description: "Checking hoses and connections for leaks.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "New Tire Installation",
    shortDescription:
      "Core of your vehicle is its motor issue can influence its functionality.",
    image: "/services/tire.webp",
    longDescription:
      "We provide expert New Tire Installation services with wheel balancing, alignment, and top-quality tire brands to ensure your vehicle performs optimally.",
    otherImages: [],
    extraData: {
      checklist: [
        {
          title: "Wheel Alignment",
          description: "Ensuring proper tire alignment for smooth driving.",
        },
        {
          title: "Balancing",
          description: "Balancing wheels to avoid vibration and uneven wear.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Heater Core & Blower",
    shortDescription:
      "Automobile’s heart is its engine, and any issues may affect its operation.",
    image: "/services/heater.webp",
    longDescription:
      "Our Heater Core & Blower service ensures your car’s heating system works efficiently, providing comfort during cold weather and maintaining engine cooling balance.",
    otherImages: [],
    extraData: {
      checklist: [
        {
          title: "Heater Core",
          description: "Checking for blockages and leaks in heater core.",
        },
        {
          title: "Blower Motor",
          description: "Testing blower fan for proper airflow and operation.",
        },
      ],
    },
  },
];

export default servicesData;
