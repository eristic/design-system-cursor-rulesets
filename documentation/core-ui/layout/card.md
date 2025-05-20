# Card Component

## Overview

The Card component is a versatile container used to group related content and actions. It provides a consistent visual structure for displaying information in a contained format.

## Import

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
```

## Usage Examples

### Basic Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

### Card with Image

```tsx
<Card>
  <CardHeader>
    <img
      src="/image.jpg"
      alt="Card image"
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <CardTitle>Image Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content below image</p>
  </CardContent>
</Card>
```

### Interactive Card

```tsx
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Hover over me!</p>
  </CardContent>
</Card>
```

## Component Structure

### Card

The main container component that wraps all card content.

### CardHeader

Container for the card's header content, typically containing the title and description.

### CardTitle

The main title of the card.

### CardDescription

Optional descriptive text that appears below the title.

### CardContent

The main content area of the card.

### CardFooter

Optional footer section for additional content or actions.

## Props API

### Card Props

| Prop      | Type    | Default   | Description                            |
| --------- | ------- | --------- | -------------------------------------- |
| className | string  | undefined | Additional CSS classes                 |
| asChild   | boolean | false     | Whether to render as a child component |

### CardHeader Props

| Prop      | Type   | Default   | Description            |
| --------- | ------ | --------- | ---------------------- |
| className | string | undefined | Additional CSS classes |

### CardTitle Props

| Prop      | Type    | Default   | Description                            |
| --------- | ------- | --------- | -------------------------------------- |
| className | string  | undefined | Additional CSS classes                 |
| asChild   | boolean | false     | Whether to render as a child component |

### CardDescription Props

| Prop      | Type    | Default   | Description                            |
| --------- | ------- | --------- | -------------------------------------- |
| className | string  | undefined | Additional CSS classes                 |
| asChild   | boolean | false     | Whether to render as a child component |

### CardContent Props

| Prop      | Type   | Default   | Description            |
| --------- | ------ | --------- | ---------------------- |
| className | string | undefined | Additional CSS classes |

### CardFooter Props

| Prop      | Type   | Default   | Description            |
| --------- | ------ | --------- | ---------------------- |
| className | string | undefined | Additional CSS classes |

## Accessibility Guidelines

1. **Semantic Structure**

   - Use appropriate heading levels in CardTitle
   - Maintain proper document outline
   - Use ARIA landmarks when appropriate

2. **Interactive Elements**

   - Ensure proper focus management
   - Maintain keyboard navigation
   - Provide clear focus indicators

3. **Content Organization**
   - Use clear visual hierarchy
   - Maintain sufficient color contrast
   - Provide alternative text for images

## Best Practices

1. **Content Organization**

   - Keep content concise and focused
   - Use consistent spacing
   - Maintain visual hierarchy

2. **Interactive Elements**

   - Place primary actions in CardFooter
   - Use appropriate hover states
   - Provide clear feedback

3. **Responsive Design**

   - Ensure proper spacing on all devices
   - Use appropriate image sizes
   - Test on multiple screen sizes

4. **Performance**
   - Optimize images
   - Minimize nested components
   - Use appropriate loading strategies

## Examples

### Product Card

```tsx
<Card>
  <CardHeader>
    <img
      src="/product.jpg"
      alt="Product"
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <CardTitle>Product Name</CardTitle>
    <CardDescription>$99.99</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Product description goes here...</p>
  </CardContent>
  <CardFooter>
    <Button>Add to Cart</Button>
  </CardFooter>
</Card>
```

### Profile Card

```tsx
<Card>
  <CardHeader>
    <div className="flex items-center gap-4">
      <img src="/avatar.jpg" alt="Profile" className="w-16 h-16 rounded-full" />
      <div>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p>Bio and additional information...</p>
  </CardContent>
</Card>
```

## Related Components

- [Button](../interactive/button.md)
- [Avatar](../data-display/avatar.md)
- [Image](../data-display/image.md)

## Troubleshooting

### Common Issues

1. **Layout Problems**

   - Check padding and margin values
   - Verify flex/grid layout
   - Inspect container constraints

2. **Content Overflow**

   - Use appropriate content truncation
   - Implement proper scrolling
   - Check responsive behavior

3. **Styling Conflicts**
   - Check className specificity
   - Verify theme variables
   - Inspect CSS inheritance

## Changelog

### v1.0.0

- Initial release
- Basic card structure
- Component composition

### v1.1.0

- Added hover states
- Improved accessibility
- Enhanced documentation
