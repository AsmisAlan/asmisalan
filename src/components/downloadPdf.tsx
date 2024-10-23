import { Resume } from "@/data/model";
import { jsPDF } from "jspdf";

export function generateResumePDF(resume: Resume): void {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth: number = doc.internal.pageSize.getWidth();
  const pageHeight: number = doc.internal.pageSize.getHeight();
  const margin: number = 10;

  const leftPanelWidth: number = 60; // Width for the left panel
  const rightPanelX: number = leftPanelWidth + margin; // X position for the right panel
  const rightPanelWidth: number = pageWidth - leftPanelWidth - margin * 2; // Width for the right panel
  const leftPanelMaxWidth: number = leftPanelWidth - margin * 2; // Max width for text in the left panel

  let currentYRight: number = margin;

  // Draw the left panel content once and use it as a template for other pages
  function drawLeftPanelContent(): void {
    let leftY: number = margin;

    // Picture placeholder
    doc.setDrawColor(0);
    // doc.rect(margin, leftY, leftPanelWidth - margin * 2, 60, "S"); // Picture box
    // leftY += 65;

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Skills Section
    doc.setFontSize(16);
    doc.text(`Contact`, margin, leftY, { maxWidth: leftPanelMaxWidth });
    leftY += 6; // Adjusted line spacing
    doc.setFontSize(10);

    // Personal Info
    const personalInfo: string[] = [
      `${resume.contact.email}`,
      `${resume.contact.tel}`,
    ];

    personalInfo.forEach((info) => {
      leftY = addText(doc, info, margin, leftY, {
        maxWidth: leftPanelMaxWidth,
      });
      leftY += 2; // Adjusted line spacing
    });

    leftY = addText(doc, `${window.location.origin}`, margin, leftY, {
      maxWidth: leftPanelMaxWidth,
      url: window.location.origin,
    });
    leftY += 2; // Adjusted line spacing

    // Social Media Links
    Object.keys(resume.contact.social).forEach((key) => {
      const socialMedia = resume.contact.social[key];
      leftY = addText(
        doc,
        `${socialMedia.name}: ${socialMedia.displayAs}`,
        margin,
        leftY,
        {
          maxWidth: leftPanelMaxWidth,
          url: socialMedia.url,
        }
      );
      leftY += 2; // Adjusted line spacing
    });

    // Language Section
    leftY += 10;
    doc.setFontSize(16);
    doc.text("Languages", margin, leftY, { maxWidth: leftPanelMaxWidth });
    leftY += 6; // Adjusted line spacing
    doc.setFontSize(10);

    resume.languages.forEach((language) => {
      leftY = addText(
        doc,
        `${language.name} (${language.level})`,
        margin,
        leftY,
        {
          maxWidth: leftPanelMaxWidth,
        }
      );
      leftY += 2; // Adjusted line spacing
    });

    // Skills Section
    leftY += 10;
    doc.setFontSize(16);
    doc.text("Skills", margin, leftY, { maxWidth: leftPanelMaxWidth });
    leftY += 6; // Adjusted line spacing
    doc.setFontSize(10);

    resume.skills.forEach((skill) => {
      leftY = addText(doc, `- ${skill}`, margin, leftY, {
        maxWidth: leftPanelMaxWidth,
      });
      leftY += 2; // Adjusted line spacing
    });
  }

  // Helper function to add text without causing infinite recursion
  function addText(
    doc: jsPDF,
    text: string,
    x: number,
    y: number,
    options: { maxWidth: number; url?: string }
  ): number {
    const lines: string[] = doc.splitTextToSize(text, options.maxWidth);
    const lineHeight: number = doc.getFontSize() * 0.5; // Adjusted line height

    lines.forEach((line) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
        // Draw the left panel template on the new page
        drawLeftPanelTemplate();
      }
      if (options.url) {
        doc.setTextColor(0, 0, 255); // Blue color for links
        doc.textWithLink(line, x, y, { url: options.url });
        doc.setTextColor(0, 0, 0); // Reset color
      } else {
        doc.text(line, x, y, { maxWidth: options.maxWidth });
      }
      y += lineHeight;
    });
    return y;
  }

  // Function to draw the left panel template (background)
  function drawLeftPanelTemplate(): void {
    // Draw the left panel background or any static elements you need
    doc.setFillColor(240, 240, 240); // Light grey background
    doc.rect(0, 0, leftPanelWidth, pageHeight, "F");
    // Optionally, you can draw borders or other decorative elements here
  }

  // Initial draw of the left panel template and content
  drawLeftPanelTemplate();
  drawLeftPanelContent();

  // Right Panel Content
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text(resume.name, rightPanelX, currentYRight);
  currentYRight += 10; // Adjusted line spacing
  doc.setFontSize(10);

  // Summary
  //   doc.text("Summary", rightPanelX, currentYRight);
  //   currentYRight += 6; // Adjusted line spacing
  doc.setFontSize(10);
  currentYRight = addText(doc, resume.summary, rightPanelX, currentYRight, {
    maxWidth: rightPanelWidth,
  });
  currentYRight += 6; // Adjusted line spacing

  // Work
  doc.setFontSize(20);
  doc.text("Experience", rightPanelX, currentYRight);
  currentYRight += 10; // Adjusted line spacing

  for (const work of resume.work) {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    currentYRight = addText(doc, work.company, rightPanelX, currentYRight, {
      maxWidth: rightPanelWidth,
    });
    currentYRight += 1; // Adjusted line spacing

    // date and location
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    currentYRight = addText(
      doc,
      work.location
        ? `${work.start} - ${work.end} | ${work.location}`
        : `${work.start} - ${work.end}`,
      rightPanelX,
      currentYRight,
      {
        maxWidth: rightPanelWidth,
      }
    );

    doc.setTextColor(0, 0, 0);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    const workDetails: string[] = [`${work.title}`];

    if (work.badges && work.badges.length > 0) {
      workDetails.push(`${work.badges.join(", ")}`);
    }

    for (const detail of workDetails) {
      currentYRight = addText(doc, detail, rightPanelX, currentYRight, {
        maxWidth: rightPanelWidth,
      });
      currentYRight += 1; // Adjusted line spacing
    }

    // Description
    currentYRight = addText(doc, work.description, rightPanelX, currentYRight, {
      maxWidth: rightPanelWidth,
    });
    currentYRight += 1; // Adjusted line spacing

    // Link if present
    if (work.href && work.href !== "") {
      currentYRight = addText(doc, work.href, rightPanelX, currentYRight, {
        maxWidth: rightPanelWidth,
        url: work.href,
      });
      currentYRight += 1; // Adjusted line spacing
    }

    currentYRight += 5;
  }
  currentYRight += 6; // Adjusted line spacing

  // Education
  doc.setFontSize(20);
  doc.text("Education", rightPanelX, currentYRight);
  currentYRight += 10; // Adjusted line spacing

  for (const education of resume.education) {
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    currentYRight = addText(doc, education.school, rightPanelX, currentYRight, {
      maxWidth: rightPanelWidth,
    });
    currentYRight += 1; // Adjusted line spacing

    // date and location
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    currentYRight = addText(
      doc,
      `${education.start} - ${education.end}`,
      rightPanelX,
      currentYRight,
      {
        maxWidth: rightPanelWidth,
      }
    );

    doc.setTextColor(0, 0, 0);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    const educationDetails: string[] = [`${education.degree}`];

    for (const detail of educationDetails) {
      currentYRight = addText(doc, detail, rightPanelX, currentYRight, {
        maxWidth: rightPanelWidth,
      });
      currentYRight += 1; // Adjusted line spacing
    }

    // Link if present
    if (education.href && education.href !== "") {
      currentYRight = addText(doc, education.href, rightPanelX, currentYRight, {
        maxWidth: rightPanelWidth,
        url: education.href,
      });
      currentYRight += 1; // Adjusted line spacing
    }

    currentYRight += 5;
  }
  currentYRight += 6; // Adjusted line spacing

  // Experience
  doc.setFontSize(20);
  doc.text("Further Experience", rightPanelX, currentYRight);
  currentYRight += 10; // Adjusted line spacing
  doc.setFontSize(10);

  for (const experience of resume.experience) {
    doc.setFont("helvetica", "bold");
    currentYRight = addText(doc, experience.title, rightPanelX, currentYRight, {
      maxWidth: rightPanelWidth,
    });
    currentYRight += 2; // Adjusted line spacing

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 100, 100);
    currentYRight = addText(
      doc,
      experience.location
        ? `${experience.dates} | ${experience.location}`
        : experience.dates,
      rightPanelX,
      currentYRight,
      {
        maxWidth: rightPanelWidth,
      }
    );

    currentYRight += 2; // Adjusted line spacing

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    currentYRight = addText(
      doc,
      experience.description,
      rightPanelX,
      currentYRight,
      {
        maxWidth: rightPanelWidth,
      }
    );

    currentYRight += 1; // Adjusted line spacing

    if (experience.links && experience.links.length > 0) {
      experience.links.forEach((link) => {
        currentYRight = addText(doc, link.title, rightPanelX, currentYRight, {
          maxWidth: rightPanelWidth,
          url: link.href,
        });
        currentYRight += 1; // Adjusted line spacing
      });
    }

    currentYRight += 6; // Adjusted line spacing
  }

  // Save the PDF with timestamp
  doc.save(`${resume.name}_${Date.now()}_resume.pdf`);
}
