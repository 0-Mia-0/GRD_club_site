# Website Build Brief

## 1. Project Overview

This website is intended for students learning graphic design, specifically those in the GRD graphic design club. This website is meant to give these students information about the upcoming or current activities of the club, and to give them resources, inspiration, and information about the graphic design field.

## 2. Design Reference

<!--Use the desigmated Figma frame as the primary visual reference.
Inspect the design using the available MCP tools before implementation.-->
Identify the Figma file and intended page frame.

Describe the verified design information avaiable. 

## 3. Page Structure

<!--Identify the sections in the figma design, in order
List each section, document:

- Purpose
- Heading and Content
- Layout 
- Typography
- Colours and background
- Assets
- Important spacing and alignment
- Its relationship to adjacent systems

For example, a hero section might use a two-column layout with a heading, introductory paragraph, call-to-action button, and large photograph.-->

Sections in order from top to bottom are:
Hero, About Us, Student Work, News and Resources, Tutorials, Upcoming Activities, Contact Us.

Layout and Content Hierarchy of seach section is as follows:

Hero: 
Top navigation sits in tabs along the top of the page. A GRD club logo graphic is on the left side. A heading underneath the A GRD club logo graphic reads "Graphic Design Club". Decorative geometric SVG lines/shapes surround the background. 
Hierarchy: brand logo > heading > navigation.

About Us: 
Full-width dark navy section. Large rotated heading: “About Us” in a large display font. Two text blocks in a left-hand column using light body text. A prominent pink button (“SIGN UP”) below the text. On the right, A "INDEX" menu that opens when clicked, with links to each section of the page.
Hierarchy: large heading > intro copy > CTA.

Student Work: 
Full-width purple section. Large “Student Work” heading in a large display font. A large placeholder image tile in the top right corner. Several smaller tiles laid out in a horizontal modular grid. A simple “SEE MORE” button at lower center.
Hierarchy: large heading > gallery tiles > action button.

News and Resources:
Full-width light lavender section with a subtle grid texture image background. Large right-aligned heading in a large display font: “News and Resources”.
Three card-style article elements with pink pin markers and placeholder image boxes.
The cards use a newspaper-like layout with heading and author/date.
Hierarchy: large heading > article tiles > decorative pins.

Tutorials:
Full-width lavender section. Large vertical heading: “Tutorials” in a large display font. A secondary vertical label: “Latest Articles”. One large article card list menu on the left and a large tutorial card list menu on the right.
Hierarchy: large heading > article column > resource list.

Upcoming Activities:
Full-width dark navy section. Large heading: “Upcoming Activities” in a large display font.
Several event/photo placeholder tiles arranged in a staggered row.
A vertical label across the section on the right reads: “Contests & Challenges”. A right-side deadline block with contest cards and dates.
Hierarchy: large heading > event tiles > contest/deadline cards.

Contact Us:
Full-width warm yellow section. Large heading: “Contact Us” in a large display font. Left text column with body copy. CTA button on left underneath text. Social icons and separte website link along the bottom centered.
Hierarchy: large heading > body text > CTA > social links.


## 4. Design System
<!--Document the colours, typography, spacing, content widths, buttons, and reusable components.
Document the verified:
- Color palette
- typography
- spacing
-content widths
-grid and alignment
- buttons and other interface components-->

Typography:
Main display headings use the Figma family Geostar_Fill:Regular.
Body, labels, buttons, and supporting text use Big_Shoulders family with weights:
Regular
Light
SemiBold
Bold
Black

Large section titles are 70 px, use the Figma family Geostar_Fill:Regular, letter spacing 3 px.
Body copy is 12 px, uses Big_Shoulders:Light, line height 22px. 
Button text is 14px, uppercase, uses Big_Shoulders:Black, 3px letter spacing
Secondary labels and section tags are 24px/40px depending on context.

Colours:
Blue-900: #100547
Blue-400: #6b5ea1
Blue-150: #c9c3e5
Yellow-900: #ffb921
Yellow-400: #ffe099
Yellow-150: #fff3d9
Pink-900: #f1185d
Pink-400: #f191af
Pink-150: #f1cdd8
White: #ffffff
Placeholder gray blocks: #d9d9d9

Spacing, alignment, and component patterns:
Strong alignment to a fixed left margin and large horizontal rhythm.
Many sections use large decorative vertical labels rotated 90° or -90°.
Repeated component pattern:
thick 3.5px pink border around cards and tiles
7px rounded corners
white or gray blocks as placeholder media
labels and dates in pink text
large uppercase display styling
Buttons are a consistent pattern:
pink filled button for primary CTAs
outlined blue button for secondary actions
Section backgrounds alternate between dark navy, purple, lavender, and off-white/beige.
Decorative SVG shapes and pin graphics are used as layer accents rather than content elements.
The page uses a single-column editorial style with precise geometric alignment rather than fluid card grids.

Available images, icons, and other assets:
Verified assets in the design:
GRD club logo graphic (imgGrdLogo)
Decorative “Union” SVGs and geometric linework
Background grid texture (background_grid_texture.png)
Background paper texture (background_paper_texture.png)
Pushpin decorations
Social icons:
Instagram
Facebook
Placeholder image panels: gray rectangles with pink border used as mock thumbnails
Generic card placeholders for article and student work thumbnails
There are no final photographic assets or real event images visible; the existing “images” are mainly placeholder blocks or vector graphics.

Responsive design information:
The design is built as a large desktop-first landing page with fixed full-width section blocks.
The design uses a wide fixed artboard (1440 px) and tall vertical content flow.

## 5. Assets

<!--List the required images, logos, icons, and fonts.
Identiify the intended use of each asset. -->

List of assets required:

GRD logo (GRD logo.svg)
Purpose: Navigation
Requirements: 583px width, 323px height.

nav
Purpose: Navigation
Requirements: Preserve proportions

Background grid texture (background_grid_texture.png)
Purpose: background texture
Requirements: fit to "News and Resources" section width

Background paper texture (background_paper_texture.png)
Purpose: background texture
Requirements:

Social icons:
Instagram
Facebook

pushpin1
Purpose: decoration
Requirements: preserve proportions

pushpin2
Purpose: decoration
Requirements: preserve proportions

pushpin3
Purpose: decoration
Requirements: preserve proportions

facebook_icon
Purpose: navigation
Requirements: preserve proportions

instagram_icon
Purpose: navigation
Requirements: preserve proportions

St. Clair College_link
Purpose: navigation
Requirements: preserve proportions

Big_Shoulders type family
Purpose: typography

Geostar_Fill type family
Purpose: typography


## 6. Technical Requirements

<!--Build a complete, single-page website using semantic HTML5, CSS, and Javascript only where needed
Specify HTML, CSS< Javascript. file organization, accessibililty, and any necessary interactions.-->

Build a complete, single-page website using semantic HTML5, CSS, and Javascript only where needed. 

## 7. Responsive Behavior

<!--Adapt the layout for desktop, tablet, and mobile. Preserve content heirarchy and usability,
Desecribe the intended desktop, tablet, and mobile layout. -->

## 8. Aceptance Criteria

<!--List the visual, technical, responsive, functional requiremenets for completion.-->

The site must:
- Include every required design section.
- Use the correct available assets.
- Match the design's visual hierarchy.
- Work at different viewport widths
- Have no broken local asset references
- Be reviewed in a browser before completion

## 9. Outstanding Questions 

Record issuing information or descisions that must be resolved before final approval. 

<!-- COPILOT PROMPT
I am building a new single-page website from my
own completed Figma design.
 
Use the available Figma MCP tools to inspect the
design before making any changes to the project.
 
Identify:
 
1. The intended page frame and its dimensions.
2. Every major section in the order it appears.
3. The layout and content hierarchy of each section.
4. The typography and colours that can be verified.
5. The spacing, alignment, and component patterns.
6. The available images, icons, and other assets.
7. Any responsive design information that is available.
8. Any missing or uncertain design information.
 
Summarize your findings in a structured report.
 
Do not create or modify website files yet.
Do not invent measurements or content that cannot
be verified from the available design information.
-->