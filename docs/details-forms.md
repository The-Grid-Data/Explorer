# Details Forms Technical Specification

## Overview

This document outlines the implementation of a reusable details modal system for editing assets, products, and other entities in the application. The system will follow the existing patterns of component composition and modularity.

## Component Architecture

### Base Components

#### 1. Details Container

- Location: `components/ui/details-container.tsx`
- Purpose: Provides a responsive modal/drawer container for forms
- Key Features:
  - Responsive design (Dialog for desktop, Drawer for mobile)
  - Standard header and footer structure
  - Scroll area for content
  - Form context provider

#### 2. Form Component

- Location: `components/ui/form.tsx`
- Purpose: Base form component for standardized form handling
- Key Features:
  - Integration with react-hook-form
  - Standard form layout system
  - Error handling and validation
  - Loading state management

### Entity-Specific Components

#### Data Lenses Implementation

Each data lens follows the same modular structure and shares common components and utilities. The implementation should maximize code reuse across different entity types.

Location: `components/containers/profile-detail/components/[entity-type]-details/`

Data Lenses Types:

- Profile Information
- Products
- Assets
- Entities
- Socials

Common Component Structure (per lens):

1. Container Component (`[entity]-details.tsx`)

   - Manages modal state and layout
   - Handles form submission flow
   - Provides data context
   - Reuses base DetailsContainer

2. Form Component (`[entity]-form.tsx`)

   - Implements form structure
   - Handles validation rules
   - Manages field interactions
   - Utilizes shared form components

3. Field Components (`[entity]-form-fields.tsx`)

   - Field-specific implementations
   - Field grouping and layout
   - Field-level validation
   - Uses shared field components

4. Form Logic Hook (`use-[entity]-form.ts`)
   - Form state management
   - API integration
   - Error handling
   - Leverages shared form utilities

#### Shared Components and Utilities

Location: `components/containers/profile-detail/shared/`

1. Common Field Components

   - URL fields
   - Relationship selectors
   - Date pickers
   - Status selectors
   - Rich text editors

2. Shared Validation Rules

   - Common field validations
   - Cross-field validations
   - Relationship validations

3. Common Form Utilities

   - Error handling
   - API integration patterns
   - Cache management
   - Form state utilities

4. Shared Types and Interfaces
   - Form field types
   - Validation schemas
   - API types
   - Common props interfaces

## Technical Requirements

### State Management

- Use react-hook-form for form state
- Implement optimistic updates for better UX
- Handle loading and error states

### React Query Integration

- Utilize existing queries from parent components for initial data
- Implement mutations for form submissions:
  - Optimistic updates for immediate feedback
  - Error reversal on failed submissions
  - Cache invalidation on success
- Cache management:
  - Invalidate affected queries after successful updates
  - Update related profile data
  - Handle nested entity relationships

### Data Flow

- Utilize existing data from cards/parent components
- REST API integration for updates
- Cache invalidation strategy

### Validation

- Field-level validation rules
- Form-wide validation
- API error handling and mapping

### UI/UX Requirements

- Responsive design
- Loading states and feedback
- Error message display
- Consistent styling with design system

### Performance Considerations

- Lazy loading where appropriate
- Optimized re-renders
- Efficient form state updates

## Integration Points

### Profile Data Card

- Add edit capability
- Handle edit state
- Manage permissions

### API Layer

- REST endpoints for updates
- Error handling
- Cache management

## Implementation Steps

1. Base Infrastructure

   - Create container components
   - Implement form system
   - Set up validation framework

2. Product Details

   - Implement container
   - Create form components
   - Add field implementations

3. Asset Details

   - Follow product details pattern
   - Implement asset-specific fields
   - Add validation rules

4. Testing & Documentation
   - Unit tests
   - Integration tests
   - Usage documentation

## Success Criteria

1. Functionality

   - Forms submit successfully
   - Validation works as expected
   - Error handling is robust

2. User Experience

   - Responsive design works
   - Loading states are clear
   - Error messages are helpful

3. Code Quality
   - Type safety
   - Reusable components
   - Clear documentation
