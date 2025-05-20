# Portfolio Card Component

## Overview

The Portfolio Card component is a specialized card designed to showcase portfolio items, projects, or case studies. It provides a consistent layout for displaying project information, images, and related actions.

## Import

```tsx
import { PortfolioCard } from "@/components/portfolio-card";
```

## Usage Examples

### Basic Portfolio Card

```tsx
<PortfolioCard
  title="Project Name"
  description="Project description goes here..."
  imageUrl="/project-image.jpg"
  tags={["React", "TypeScript", "Tailwind"]}
  link="/projects/project-name"
/>
```

### Portfolio Card with Custom Actions

```tsx
<PortfolioCard
  title="Project Name"
  description="Project description goes here..."
  imageUrl="/project-image.jpg"
  tags={["React", "TypeScript", "Tailwind"]}
  link="/projects/project-name"
  actions={
    <div className="flex gap-2">
      <Button variant="outline" size="sm">
        View Demo
      </Button>
      <Button variant="outline" size="sm">
        Source Code
      </Button>
    </div>
  }
/>
```

### Portfolio Card with Featured Badge

```tsx
<PortfolioCard
  title="Project Name"
  description="Project description goes here..."
  imageUrl="/project-image.jpg"
  tags={["React", "TypeScript", "Tailwind"]}
  link="/projects/project-name"
  isFeatured={true}
/>
```

## Props API

| Prop        | Type      | Default   | Description                        |
| ----------- | --------- | --------- | ---------------------------------- |
| title       | string    | required  | The title of the portfolio item    |
| description | string    | required  | A brief description of the project |
| imageUrl    | string    | required  | URL of the project's main image    |
| tags        | string[]  | []        | Array of technology tags           |
| link        | string    | required  | URL to the project's detail page   |
| actions     | ReactNode | undefined | Custom action buttons or elements  |
| isFeatured  | boolean   | false     | Whether to show the featured badge |
| className   | string    | undefined | Additional CSS classes             |

## Component Structure

The Portfolio Card is composed of several sub-components:

1. **Image Container**

   - Displays the project's main image
   - Handles image loading and error states
   - Supports hover effects

2. **Content Section**

   - Title with proper heading level
   - Description text
   - Technology tags
   - Featured badge (when applicable)

3. **Action Section**
   - Default "View Project" link
   - Custom actions (when provided)

## Accessibility Guidelines

1. **Image Handling**

   - Provide meaningful alt text for images
   - Handle image loading states
   - Support keyboard navigation

2. **Content Structure**

   - Use semantic HTML elements
   - Maintain proper heading hierarchy
   - Ensure sufficient color contrast

3. **Interactive Elements**
   - Make all interactive elements keyboard accessible
   - Provide clear focus indicators
   - Include proper ARIA labels

## Best Practices

1. **Image Optimization**

   - Use appropriate image sizes
   - Implement lazy loading
   - Provide fallback images
   - Optimize for performance

2. **Content Organization**

   - Keep descriptions concise
   - Use relevant technology tags
   - Maintain consistent formatting

3. **Responsive Design**

   - Ensure proper scaling on all devices
   - Maintain readability at all sizes
   - Test touch interactions

4. **Performance**
   - Optimize image loading
   - Minimize re-renders
   - Use appropriate caching

## Examples

### Project Showcase

```tsx
<PortfolioCard
  title="E-commerce Platform"
  description="A modern e-commerce platform built with Next.js and Stripe integration."
  imageUrl="/projects/ecommerce.jpg"
  tags={["Next.js", "Stripe", "Tailwind CSS"]}
  link="/projects/ecommerce"
  isFeatured={true}
/>
```

### Case Study Card

```tsx
<PortfolioCard
  title="Brand Redesign"
  description="Complete brand overhaul for a tech startup, including logo, website, and marketing materials."
  imageUrl="/projects/brand-redesign.jpg"
  tags={["Branding", "UI/UX", "Web Design"]}
  link="/case-studies/brand-redesign"
  actions={
    <div className="flex gap-2">
      <Button variant="outline" size="sm">
        <FileText className="mr-2 h-4 w-4" />
        Case Study
      </Button>
      <Button variant="outline" size="sm">
        <ExternalLink className="mr-2 h-4 w-4" />
        Live Site
      </Button>
    </div>
  }
/>
```

## Related Components

- [Card](../core-ui/layout/card.md)
- [Button](../core-ui/interactive/button.md)
- [Badge](../core-ui/data-display/badge.md)
- [Image](../core-ui/data-display/image.md)

## Troubleshooting

### Common Issues

1. **Image Loading**

   - Check image URL validity
   - Verify image dimensions
   - Implement proper error handling

2. **Layout Issues**

   - Check container constraints
   - Verify responsive breakpoints
   - Inspect flex/grid layout

3. **Performance Problems**
   - Optimize image sizes
   - Check bundle size
   - Monitor render performance

## Changelog

### v1.0.0

- Initial release
- Basic portfolio card structure
- Image and content layout

### v1.1.0

- Added featured badge
- Improved image handling
- Enhanced accessibility

### v1.2.0

- Added custom actions support
- Improved responsive design
- Added performance optimizations
