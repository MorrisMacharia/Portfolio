"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const textColor = theme === "light" ? "text-navy-900" : "text-white"; // Navy blue for light theme, white for dark

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#9ca3af" : "#ffffff"}
      >
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "#f3f4f6" : "#1f2937",
              color: theme === "light" ? "#111827" : "#f3f4f6",
              visibility: "visible", // Ensure visibility
              opacity: 1, // Make sure it's fully opaque
              overflow: "visible", // Prevent content clipping
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                theme === "light" ? "#f3f4f6" : "#1f2937"
              }`,
            }}
            date={experience.date}
            iconStyle={{
              background: "#1f2937", // Background color of the icon
              color: "#fff", // Icon color (white for visibility)
              visibility: "visible", // Ensure icons are visible
              opacity: 1, // Make icons fully opaque
              zIndex: 10, // Ensure the icon is on top and visible
            }}
            icon={<experience.icon.type />} // Render the icon correctly
          >
            <h3 className={`text-xl font-bold ${textColor}`}>
              {experience.title}
            </h3>
            <h4
              className={`text-lg ${
                theme === "light" ? "text-navy-700" : "text-gray-400"
              }`}
            >
              {experience.location}
            </h4>
            <p className={textColor}>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
