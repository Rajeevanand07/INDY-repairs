const servicesData = [
  {
    id: 1,
    title: "Full Vehicle Inspection",
    shortDescription:
      "Comprehensive inspection of your truck to detect issues early and ensure reliability.",
    image: "/services/inspection.avif",
    longDescription:
      "Our Full Vehicle Inspection is a detailed, multi-point diagnostic service designed for heavy-duty trucks and trailers to ensure peak performance and safety. Our certified technicians meticulously examine every major system, including the engine, transmission, brakes, suspension, electrical components, exhaust, and safety features. Using advanced diagnostic tools and adhering to Department of Transportation (DOT) standards, we identify potential issues before they lead to costly repairs or unexpected downtime. This service provides a comprehensive report with actionable insights, ensuring your vehicle remains road-ready, compliant with regulations, and capable of handling the demands of long-haul or heavy-duty operations. Perfect for fleet managers or owner-operators, our inspections minimize risks and maximize vehicle longevity.",
    otherImages: [
      "/services/inspection-1.webp",
      "/services/inspection-2.webp",
      "/services/inspection-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Engine Health Assessment",
          description:
            "We perform an exhaustive evaluation of the engine, checking oil levels, coolant quality, belts, hoses, and engine mounts for wear or damage. Our technicians inspect for leaks, unusual noises, and signs of overheating, while also assessing turbocharger performance, fuel filters, and air intake systems. This thorough process ensures optimal engine efficiency, prevents breakdowns, and reduces repair costs by addressing issues early, keeping your truck reliable for long hauls.",
        },
        {
          title: "Brake System Evaluation",
          description:
            "Our detailed brake inspection covers air brake lines, drums, shoes, valves, and compressors, ensuring optimal stopping power. We test for air leaks, measure component wear, and verify brake responsiveness under simulated load conditions. Additionally, we inspect slack adjusters and brake chambers to ensure compliance with safety standards, preventing accidents and extending the lifespan of brake components for safe and efficient operation.",
        },
        {
          title: "Suspension & Steering Inspection",
          description:
            "We examine shocks, struts, bushings, springs, steering linkages, and tie rods to ensure stability and precise handling. Using precision alignment tools, we check for misalignment, wear, or looseness that could cause uneven tire wear or poor ride quality. Correcting these issues enhances driver comfort, improves fuel efficiency, and ensures safe operation under heavy loads, extending the lifespan of suspension and steering components.",
        },
        {
          title: "Electrical System Check",
          description:
            "Our technicians inspect the truck’s electrical system, including batteries, alternators, wiring, and lighting, to ensure reliable operation. We test for voltage irregularities, corrosion, and faulty connections that could lead to system failures. This service ensures all electrical components, from headlights to onboard diagnostics, function correctly, enhancing safety and preventing downtime during critical operations.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Engine Diagnostics",
    shortDescription:
      "Advanced diagnostics to detect and resolve hidden engine performance issues.",
    image: "/services/diagnostics.webp",
    longDescription:
      "Our Engine Diagnostics service utilizes cutting-edge technology to pinpoint and resolve engine performance issues in heavy-duty trucks. By connecting to the vehicle’s electronic control unit (ECU), our technicians retrieve and analyze error codes, sensor data, and performance metrics to identify issues like fuel injector failures, turbocharger inefficiencies, or exhaust system malfunctions. This data-driven approach eliminates guesswork, enabling precise repairs that save time and money. Designed for modern trucks with complex electronics, this service improves fuel efficiency, reduces emissions, and prevents unexpected breakdowns, ensuring your vehicle performs reliably under demanding conditions.",
    otherImages: [
      "/services/diagnostics-1.webp",
      "/services/diagnostics-2.webp",
      "/services/diagnostics-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "ECU Scan & Error Code Analysis",
          description:
            "We use advanced diagnostic tools to connect to the truck’s ECU, retrieving stored and pending error codes. Our technicians analyze live data streams to detect issues with sensors, fuel injectors, or exhaust gas recirculation (EGR) systems. This detailed process identifies intermittent faults and ensures accurate diagnosis, preventing minor issues from escalating into major repairs that could disrupt your operations.",
        },
        {
          title: "Fuel & Air System Testing",
          description:
            "We thoroughly test fuel injectors, pumps, air intake systems, and turbochargers to optimize combustion efficiency. This includes checking fuel pressure, inspecting air filters for blockages, and verifying turbo boost levels to ensure proper fuel-air balance. These steps reduce emissions, improve fuel economy, and enhance engine power, ensuring your truck operates efficiently during long hauls or heavy-duty tasks.",
        },
        {
          title: "Sensor & Wiring Inspection",
          description:
            "Our technicians inspect critical engine sensors, including oxygen, crankshaft, and camshaft sensors, for accuracy and functionality. We also check wiring harnesses for damage or corrosion that could affect performance. This service ensures reliable sensor operation, preventing misfires, power loss, or poor fuel efficiency, and keeps your engine running smoothly under all conditions.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Brake System Repair & Drums",
    shortDescription:
      "Expert brake repair and drum replacement for heavy-duty trucks and trailers.",
    image: "/services/brake.webp",
    longDescription:
      "The brake system is the most critical safety component in heavy-duty trucks, ensuring reliable stopping power under extreme conditions. Our Brake System Repair service restores and enhances braking performance by inspecting and repairing air brake systems, replacing worn drums, shoes, valves, and lines, and ensuring compliance with DOT safety standards. Using high-quality, OEM-grade parts and specialized tools, our technicians address issues like uneven braking, air leaks, or component wear. This service not only prevents accidents but also reduces wear on related systems like tires and suspension, lowering maintenance costs and ensuring your truck is safe and reliable for heavy loads or long routes.",
    otherImages: [
      "/services/brake-1.webp",
      "/services/brake-2.webp",
      "/services/brake-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Air Brake System Repair",
          description:
            "We inspect and repair air brake components, including compressors, valves, hoses, and brake chambers, to ensure consistent air pressure delivery. Our technicians use pressure gauges to detect leaks, verify slack adjuster functionality, and check air dryers for moisture buildup. This ensures reliable braking performance, meets federal safety standards, and prevents costly downtime due to brake system failures.",
        },
        {
          title: "Brake Drums & Shoes Replacement",
          description:
            "Our team inspects brake drums and shoes for cracks, scoring, or excessive wear, replacing them with heavy-duty, OEM-quality parts. We measure drum thickness and shoe wear to ensure even braking across all axles, preventing brake fade under heavy loads. This service enhances stopping power, extends component life, and reduces maintenance costs for your fleet.",
        },
        {
          title: "ABS & Hydraulic System Testing",
          description:
            "We test anti-lock braking system (ABS) sensors, hydraulic fluid levels, and brake lines to ensure optimal performance during emergency braking. Our technicians verify ABS functionality to prevent wheel lock-ups and inspect hydraulic components for leaks or contamination. This service enhances driver control, improves safety on challenging roads, and ensures compliance with modern safety regulations.",
        },
        {
          title: "Brake Adjustment & Calibration",
          description:
            "We calibrate brake systems to ensure proper adjustment and responsiveness, checking slack adjusters and brake balance across axles. This process eliminates uneven braking, improves stopping efficiency, and reduces wear on tires and suspension components, ensuring safe and reliable operation under heavy loads or long hauls.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Power Steering Fluid Service",
    shortDescription:
      "Smooth steering guaranteed with fluid checks, leak detection, and system care.",
    image: "/services/steering.webp",
    longDescription:
      "Heavy-duty trucks rely on robust power steering systems for precise control during long hauls, tight maneuvers, or heavy-load operations. Our Power Steering Fluid Service ensures optimal system performance by inspecting, flushing, and replacing contaminated or low fluid, which can cause steering stiffness or pump failure. Our technicians check hoses, seals, and pumps for leaks or wear, using manufacturer-recommended fluids to restore smooth, responsive steering. This service reduces driver fatigue, prevents costly system repairs, and ensures safe handling, keeping your truck reliable and efficient on the road.",
    otherImages: [
      "/services/steering-1.webp",
      "/services/steering-2.webp",
      "/services/steering-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Fluid Quality & Level Inspection",
          description:
            "We inspect power steering fluid for contamination, burnt odor, or low levels, which can indicate leaks or system degradation. Our technicians drain old fluid and refill with high-quality, manufacturer-approved hydraulic fluid to ensure smooth pump operation and responsive steering. This prevents wear on steering components, reduces steering effort, and enhances safety during demanding operations.",
        },
        {
          title: "Hoses & Pump Diagnostics",
          description:
            "Our team examines power steering hoses, seals, and pumps for leaks, cracks, or pressure inefficiencies using diagnostic tools. We verify pump pressure and check for air in the system, which can cause noise or stiffness. Addressing these issues early prevents pump failure, maintains precise steering, and ensures safe vehicle control under heavy loads or high speeds.",
        },
        {
          title: "Steering Gear Inspection",
          description:
            "We inspect the steering gear and linkages for wear, corrosion, or looseness that could affect handling. Our technicians lubricate moving parts and verify proper operation to ensure smooth, precise steering. This service enhances driver comfort, reduces strain on the steering system, and prevents unexpected failures during long-haul operations.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Transmission Change",
    shortDescription:
      "Heavy-duty transmission service and replacement for smooth gear shifting.",
    image: "/services/transmission.webp",
    longDescription:
      "The transmission is the backbone of your truck’s power delivery, ensuring efficient transfer of engine power to the wheels under heavy loads. Our Transmission Change service addresses issues like slipping gears, rough shifts, or power loss by inspecting and repairing or replacing damaged components. We service both manual and automatic transmissions, checking clutch systems, gear synchronizers, and fluid conditions. Using high-quality parts and fluids, our technicians restore smooth shifting, improve fuel efficiency, and prevent costly breakdowns, ensuring your truck remains reliable for long-haul or heavy-duty operations.",
    otherImages: [
      "/services/transmission-1.webp",
      "/services/transmission-2.webp",
      "/services/transmission-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Transmission Fluid Service",
          description:
            "We drain and flush old, contaminated transmission fluid to remove debris and metal particles that cause wear. Our technicians refill with premium-grade, manufacturer-specified fluid to ensure proper lubrication and cooling. This process prevents overheating, reduces gear wear, and extends the transmission’s lifespan, ensuring smooth performance under heavy loads or long distances.",
        },
        {
          title: "Clutch & Gear Inspection",
          description:
            "For manual transmissions, we inspect clutch plates, pressure plates, and throw-out bearings for wear or slippage. For automatics, we check torque converters, gear synchronizers, and valve bodies. Our technicians ensure smooth engagement and seamless gear transitions, addressing issues like grinding or hesitation to improve driver control and prevent costly transmission damage.",
        },
        {
          title: "Seals & Leak Detection",
          description:
            "We inspect transmission seals, gaskets, and pans for leaks that could lead to fluid loss and overheating. Using diagnostic tools, we verify system pressure and check for internal wear or contamination. Repairing or replacing faulty seals prevents fluid leaks, reduces the risk of breakdowns, and ensures long-term reliability for your truck’s transmission.",
        },
        {
          title: "Transmission Cooler Check",
          description:
            "We inspect the transmission cooler and lines for clogs, leaks, or corrosion that could cause overheating. Our technicians ensure proper coolant flow to maintain optimal operating temperatures, preventing damage to gears and bearings. This service enhances transmission durability and performance during long hauls or heavy-duty operations.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Truck Trailer Bushing Replacement",
    shortDescription:
      "Bushing replacements to stabilize trailers and reduce wear on suspension.",
    image: "/services/bushing.webp",
    longDescription:
      "Trailer bushings are essential for absorbing road vibrations and maintaining suspension alignment in heavy-duty trucks and trailers. Worn bushings lead to instability, uneven tire wear, and increased strain on the trailer frame, compromising safety and performance. Our Truck Trailer Bushing Replacement service uses durable, high-quality bushings designed for heavy loads. Our technicians inspect and replace worn components, perform alignment checks, and ensure proper installation to restore stability and ride quality. This service enhances safety, reduces maintenance costs, and ensures reliable performance for long-haul or heavy-duty operations.",
    otherImages: [
      "/services/bushing-1.webp",
      "/services/bushing-2.webp",
      "/services/bushing-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Suspension Bushing Replacement",
          description:
            "We inspect and replace worn suspension bushings in leaf springs, torque arms, and equalizer beams using heavy-duty, OEM-quality parts. Our technicians ensure proper fitment to restore vibration absorption and reduce strain on the trailer frame. This minimizes excessive movement, enhances load stability, and prevents premature wear on axles, shocks, and other components.",
        },
        {
          title: "Alignment & Stability Check",
          description:
            "After bushing replacement, we perform a precision alignment check using advanced tools to ensure proper suspension geometry. This eliminates trailer sway, improves tracking, and enhances stability during high-speed or heavy-load operations. Proper alignment reduces tire wear, improves fuel efficiency, and ensures safer handling on highways or rough terrain.",
        },
        {
          title: "Torque & Fastener Inspection",
          description:
            "We inspect and torque all fasteners related to bushing installation, ensuring secure attachment and preventing loosening under heavy loads. Our technicians check for wear or damage in related components like U-bolts and hangers, ensuring the suspension system remains robust and reliable during demanding operations.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Air Compressor Repair",
    shortDescription:
      "Essential air compressor maintenance for brakes, suspension, and accessories.",
    image: "/services/compressor.webp",
    longDescription:
      "The air compressor is a critical component of a truck’s air brake system, powering brakes, pneumatic suspension, and air-powered accessories. A malfunctioning compressor can lead to reduced braking efficiency, suspension instability, or accessory failure, posing significant safety risks. Our Air Compressor Repair service restores reliable pressure generation through comprehensive inspections and repairs of pistons, valves, seals, and air lines. Using high-quality replacement parts, our technicians ensure durability and compliance with DOT standards. This service enhances braking performance, improves suspension stability, and ensures consistent operation of air-powered systems, keeping your truck safe and operational.",
    otherImages: [
      "/services/compressor-1.webp",
      "/services/compressor-2.webp",
      "/services/compressor-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Air Pressure Diagnostics",
          description:
            "We conduct a comprehensive pressure test to measure compressor build-up time, maximum pressure capacity, and air delivery efficiency. Using diagnostic gauges, our technicians verify performance under load and check for slow pressure build-up or air loss. This ensures the compressor can reliably support braking, suspension, and auxiliary systems, preventing safety issues during operation.",
        },
        {
          title: "Valves & Seals Repair",
          description:
            "We inspect unloader valves, gaskets, and seals for wear, corrosion, or leaks that could reduce compressor efficiency. Our technicians replace faulty components with high-quality parts to prevent air loss and compressor overwork. This service extends the compressor’s lifespan, reduces maintenance costs, and ensures consistent pressure for safe braking and accessory operation.",
        },
        {
          title: "Air Line & Filter Inspection",
          description:
            "We examine air lines and filters for blockages, leaks, or moisture buildup that could affect compressor performance. Our technicians clean or replace air dryers and filters to prevent corrosion and ensure clean air delivery. This service enhances system reliability, prevents brake system failures, and maintains optimal performance for air-powered components.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "Exhaust Repair & Replacement",
    shortDescription:
      "Heavy-duty exhaust system repairs to reduce noise and emissions.",
    image: "/services/exhaust.webp",
    longDescription:
      "A truck’s exhaust system is vital for controlling noise, filtering harmful emissions, and maintaining engine efficiency. Corrosion, cracks, or clogs in pipes, mufflers, or catalytic converters can lead to excessive noise, reduced power, or failed emission tests. Our Exhaust Repair and Replacement service restores system integrity using high-grade stainless steel components and OEM-quality parts. Our technicians inspect and repair or replace damaged components, ensuring compliance with EPA and DOT regulations. This service improves fuel economy, prevents exhaust leaks into the cabin, and enhances engine performance, ensuring eco-friendly and safe operation for your truck.",
    otherImages: [
      "/services/exhaust-1.webp",
      "/services/exhaust-2.webp",
      "/services/exhaust-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Pipe & Muffler Repair",
          description:
            "We inspect exhaust pipes, mufflers, and hangers for cracks, rust, or leaks that disrupt airflow or increase noise. Our technicians use diagnostic tools to detect blockages and replace damaged components with heavy-duty stainless steel parts. This restores proper exhaust flow, reduces backpressure, and improves engine efficiency, noise control, and driver comfort.",
        },
        {
          title: "Emission Control Systems",
          description:
            "We examine catalytic converters, diesel particulate filters (DPF), and selective catalytic reduction (SCR) systems to ensure compliance with EPA emissions standards. Our technicians clean or replace clogged filters and verify sensor functionality to reduce harmful emissions like black smoke or nitrogen oxides. This service ensures environmental compliance and enhances fuel efficiency.",
        },
        {
          title: "Exhaust Manifold Inspection",
          description:
            "We inspect the exhaust manifold for cracks, leaks, or gasket failures that could affect engine performance. Our technicians repair or replace damaged manifolds to ensure proper exhaust flow and prevent leaks into the engine bay. This service enhances engine efficiency, reduces emissions, and prevents costly repairs down the line.",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Steel & Aluminium Welding",
    shortDescription:
      "Professional welding for frames, trailers, exhausts, and structural repairs.",
    image: "/services/welding.webp",
    longDescription:
      "Heavy-duty trucks and trailers endure significant stress, leading to cracks or damage in frames, mounts, or other structural components. Our Steel and Aluminium Welding service delivers high-strength, precision welds to restore structural integrity and ensure safe operation. Using advanced MIG, TIG, and stick welding techniques, our certified welders repair cracked frames, broken brackets, exhaust sections, and load-bearing components. We select the appropriate welding method and materials to match your truck’s specifications, ensuring durability under heavy loads. This service extends component life, enhances safety, and prevents breakdowns during demanding long-haul operations.",
    otherImages: [
      "/services/welding-1.webp",
      "/services/welding-2.webp",
      "/services/welding-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Frame & Structural Welding",
          description:
            "We repair cracked or bent frames, crossmembers, and load-bearing brackets using high-strength steel or aluminium welds. Our technicians ensure welds meet industry standards for tensile strength and durability, restoring the truck’s ability to safely carry heavy cargo. This process prevents structural failures, enhances safety, and extends the vehicle’s operational life.",
        },
        {
          title: "Exhaust & Mount Welding",
          description:
            "We address exhaust leaks, broken mounts, and damaged hangers with precision welding using corrosion-resistant materials. Our welds restore exhaust system integrity and secure mounting points, reducing noise and preventing exhaust gas leaks. This service ensures long-lasting repairs and maintains compliance with emissions and safety standards.",
        },
        {
          title: "Aluminium Component Repair",
          description:
            "For trucks and trailers with aluminium components, we use specialized TIG welding techniques to repair cracks or damage in lightweight frames, body panels, or accessories. Our technicians ensure clean, strong welds that maintain structural integrity, enhancing durability and performance for aluminium-based vehicles.",
        },
      ],
    },
  },
  {
    id: 10,
    title: "Oil Change & Filter Service",
    shortDescription:
      "Essential oil and filter changes for smooth, long-lasting engine performance.",
    image: "/services/oil.webp",
    longDescription:
      "Regular oil changes are critical for maintaining the health of heavy-duty truck engines, which endure extreme conditions during long hauls or heavy-duty operations. Our Oil Change & Filter Service ensures your engine remains lubricated, clean, and efficient by removing old, contaminated oil and replacing it with premium-grade, high-viscosity diesel engine oil. We also replace oil filters to prevent dirt, soot, and metal particles from damaging critical components. Our technicians inspect for leaks, verify oil viscosity, and ensure proper filter installation, improving fuel economy, reducing engine wear, and preventing costly failures, keeping your truck reliable for demanding operations.",
    otherImages: [
      "/services/oil-1.webp",
      "/services/oil-2.webp",
      "/services/oil-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Oil Drain & Refill",
          description:
            "We safely drain old, contaminated oil containing dirt, soot, and metal particles that can damage engine components. Our technicians refill with premium-grade, high-viscosity diesel engine oil formulated for heavy-duty trucks, ensuring optimal lubrication and cooling. This process reduces friction, prevents overheating, and extends engine life under high-stress conditions like long hauls or heavy loads.",
        },
        {
          title: "Oil Filter Replacement",
          description:
            "We install high-quality oil filters designed to trap contaminants like dirt, soot, and debris, preventing them from circulating through the engine. Our technicians verify filter compatibility and proper sealing to avoid leaks, ensuring clean oil flow. Regular filter replacement enhances engine performance, reduces wear on critical components, and improves overall reliability.",
        },
        {
          title: "Oil System Inspection",
          description:
            "We inspect the oil pan, drain plug, and gaskets for leaks or damage that could lead to oil loss. Our technicians also check oil pressure and verify proper lubrication of engine components like bearings and pistons. This service prevents engine seizures, reduces maintenance costs, and ensures reliable performance during demanding operations.",
        },
      ],
    },
  },
  {
    id: 11,
    title: "New & Used Tire Replacement",
    shortDescription:
      "Affordable tire replacement services for trucks and trailers.",
    image: "/services/tire.webp",
    longDescription:
      "Tires are the foundation of your truck’s safety and performance, bearing the weight of heavy loads across long distances or challenging terrains. Our New and Used Tire Replacement service offers a range of premium new tires and carefully inspected used tires to suit your budget and operational needs. Our technicians handle tire selection, installation, and balancing, ensuring proper tread depth, sidewall integrity, and load ratings that meet DOT standards. This service improves traction, reduces fuel consumption, and prevents blowouts, ensuring safe and efficient operation for trucks and trailers in demanding conditions.",
    otherImages: [
      "/services/tire-1.webp",
      "/services/tire-2.webp",
      "/services/tire-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "New & Used Tire Selection",
          description:
            "We offer a wide selection of new premium tires from top brands and cost-effective used tires that undergo rigorous inspection for tread depth, sidewall damage, and load capacity. Our technicians help you choose tires that match your truck’s specifications, load requirements, and driving conditions, ensuring compliance with DOT regulations and optimal performance for your budget.",
        },
        {
          title: "Tire Mounting & Balancing",
          description:
            "Using advanced equipment, we mount tires securely and perform precision wheel balancing to eliminate vibrations. Our technicians verify lug nut torque, inspect valve stems, and ensure proper installation to prevent uneven wear and improve handling. This service enhances driver comfort, extends tire life, and ensures smooth operation at high speeds or under heavy loads.",
        },
        {
          title: "Tire Condition Inspection",
          description:
            "Before installation, we inspect all tires for defects, punctures, or uneven wear patterns that could affect performance. For used tires, we verify tread depth and structural integrity to ensure safety and reliability. This thorough process ensures your tires meet safety standards and perform reliably under demanding conditions.",
        },
      ],
    },
  },
  {
    id: 12,
    title: "Tire Alignment & Balancing",
    shortDescription:
      "Precision wheel alignment for stability, safety, and fuel efficiency.",
    image: "/services/alignment.webp",
    longDescription:
      "Proper tire alignment and balancing are essential for maintaining stability, extending tire life, and improving fuel efficiency in heavy-duty trucks. Misaligned wheels cause uneven tire wear, increased rolling resistance, and difficult steering, which can compromise safety and increase operational costs. Our Tire Alignment and Balancing service uses advanced laser alignment tools and balancing equipment to restore optimal wheel angles and weight distribution. Our technicians ensure precise adjustments to camber, toe, and caster, reducing strain on suspension components and enhancing driver control. This service ensures smoother, safer operation under heavy loads or on long highway routes, saving you money on fuel and tire replacements.",
    otherImages: [
      "/services/alignment-1.webp",
      "/services/alignment-2.webp",
      "/services/alignment-3.webp",
    ],
    extraData: {
      checklist: [
        {
          title: "Wheel Alignment Adjustment",
          description:
            "Using state-of-the-art laser alignment systems, we measure and adjust wheel angles (camber, toe, and caster) to manufacturer specifications. This eliminates pulling to one side, reduces uneven tire wear, and improves vehicle stability. Proper alignment enhances fuel efficiency, extends tire lifespan, and ensures safe handling under heavy loads or adverse road conditions like wet or uneven terrain.",
        },
        {
          title: "Precision Wheel Balancing",
          description:
            "We use advanced balancing equipment to ensure equal weight distribution across each wheel, eliminating vibrations at high speeds. Our technicians apply corrective weights and verify balance to prevent uneven wear and suspension strain. This service improves driver comfort, enhances tire longevity, and ensures smoother operation during long-haul trips or heavy-duty operations.",
        },
        {
          title: "Suspension Alignment Check",
          description:
            "We inspect suspension components like springs, shocks, and bushings to ensure they support proper wheel alignment. Our technicians verify suspension geometry and address any issues that could affect tire performance or vehicle stability. This service enhances safety, reduces maintenance costs, and ensures reliable handling under demanding conditions.",
        },
      ],
    },
  },
];

export default servicesData;