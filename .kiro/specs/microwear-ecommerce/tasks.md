# Implementation Plan

- [ ] 1. Set up project structure and dependencies

  - Initialize React project with Vite
  - Install dependencies: react-router-dom, fast-check, jest, react-testing-library
  - Set up CSS Modules or Styled Components
  - Create directory structure: components, pages, contexts, hooks, data, utils, tests
  - _Requirements: All_

- [x] 2. Create product data structure and context

  - [x] 2.1 Define product data model and create sample product data

    - Create TypeScript interfaces for Product, ProductVariant, and specifications
    - Create products.json with at least 5 smartwatch products with complete data
    - _Requirements: 10.1, 10.2, 10.5_

  - [ ]\* 2.2 Write property test for product data structure

    - **Property 19: Product data structure consistency**
    - **Validates: Requirements 10.2, 10.5**

  - [x] 2.3 Implement ProductContext with product operations

    - Create ProductContext with state management
    - Implement getProductById, searchProducts, and filterProducts functions
    - Load product data from JSON file
    - _Requirements: 10.1, 10.4_

  - [ ]\* 2.4 Write property test for product updates
    - **Property 20: Product updates reflect throughout application**
    - **Validates: Requirements 10.4**

- [-] 3. Create article data structure and context

  - [x] 3.1 Define article data model and create sample articles

    - Create TypeScript interfaces for Article
    - Create articles.json with at least 3 sample articles
    - _Requirements: 13.1, 13.2, 13.5_

  - [ ]\* 3.2 Write property test for article data structure

    - **Property 23: Article data structure consistency**
    - **Validates: Requirements 13.2, 13.5**

  - [x] 3.3 Implement ArticleContext with article operations

    - Create ArticleContext with state management
    - Implement getArticleById and getRecentArticles functions
    - Load article data from JSON file
    - _Requirements: 13.1, 13.4_

  - [ ]\* 3.4 Write property test for article updates
    - **Property 24: Article updates reflect throughout application**
    - **Validates: Requirements 13.4**

- [x] 4. Implement comparison functionality

  - [x] 4.1 Create ComparisonContext

    - Implement comparison state management
    - Implement addToComparison with 3-product limit
    - Implement removeFromComparison and clearComparison
    - Implement canAddMore helper
    - _Requirements: 3.1, 3.5_

  - [ ]\* 4.2 Write property test for comparison limit

    - **Property 6: Comparison limit enforced**
    - **Validates: Requirements 3.1**

  - [ ]\* 4.3 Write property test for removing products from comparison
    - **Property 10: Removing product updates comparison**
    - **Validates: Requirements 3.5**

- [ ] 5. Build shared components

  - [x] 5.1 Create Navigation component

    - Implement header with logo and navigation links (Products, Blog, About, Contact)
    - Implement active page highlighting
    - Implement responsive hamburger menu for mobile
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [ ]\* 5.2 Write property test for active navigation highlighting

    - **Property 18: Active navigation item highlighted**
    - **Validates: Requirements 9.4**

  - [x] 5.3 Create ProductCard component

    - Display product image, name, price, and key features
    - Add "Add to Compare" button
    - _Requirements: 1.2_

  - [ ]\* 5.4 Write property test for product card display

    - **Property 1: Product card displays all required fields**
    - **Validates: Requirements 1.2**

  - [x] 5.5 Create ProductGrid component

    - Implement responsive grid layout
    - Render array of ProductCard components
    - _Requirements: 1.1, 8.3_

  - [x] 5.6 Create ImageGallery component

    - Display main image with thumbnail navigation
    - Allow image selection
    - _Requirements: 2.3_

  - [ ]\* 5.7 Write property test for image gallery

    - **Property 3: Image gallery displays all product images**
    - **Validates: Requirements 2.3**

  - [x] 5.8 Create SearchBar component

    - Implement text input with onChange handler
    - Debounce search input
    - _Requirements: 6.1_

  - [x] 5.9 Create FilterPanel component

    - Implement price range filter
    - Implement feature checkboxes
    - _Requirements: 6.2, 6.3_

  - [x] 5.10 Create HeroSection component
    - Display brand messaging and featured product image
    - Add call-to-action button
    - _Requirements: 11.1, 11.2, 11.5_

- [-] 6. Implement search and filtering logic

  - [x] 6.1 Create search function

    - Implement case-insensitive search across product names and descriptions
    - _Requirements: 6.1_

  - [ ]\* 6.2 Write property test for search functionality

    - **Property 13: Search matches product names and descriptions**
    - **Validates: Requirements 6.1**

  - [x] 6.3 Create filter functions

    - Implement price range filtering
    - Implement feature filtering
    - Implement combined filter logic
    - _Requirements: 6.2, 6.3, 6.4_

  - [ ]\* 6.4 Write property test for price filtering

    - **Property 14: Price filter returns products in range**
    - **Validates: Requirements 6.2**

  - [ ]\* 6.5 Write property test for feature filtering

    - **Property 15: Feature filter returns matching products**
    - **Validates: Requirements 6.3**

  - [ ]\* 6.6 Write property test for multiple filters
    - **Property 16: Multiple filters apply all criteria**
    - **Validates: Requirements 6.4**

- [x] 7. Build HomePage

  - [x] 7.1 Create HomePage component

    - Integrate HeroSection component
    - Display featured products grid
    - Add navigation to product catalog
    - _Requirements: 11.1, 11.2, 11.5_

  - [ ]\* 7.2 Write unit tests for HomePage
    - Test hero section renders
    - Test CTA navigation
    - _Requirements: 11.1, 11.2, 11.5_

- [-] 8. Build ProductCatalogPage

  - [x] 8.1 Create ProductCatalogPage component

    - Integrate SearchBar and FilterPanel
    - Display filtered ProductGrid
    - Handle empty search results
    - _Requirements: 1.1, 1.2, 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]\* 8.2 Write unit tests for ProductCatalogPage
    - Test product grid renders
    - Test empty results message
    - _Requirements: 1.1, 6.5_

- [x] 9. Build ProductDetailPage

  - [x] 9.1 Create ProductDetailPage component

    - Display product information with ImageGallery
    - Show all specifications and highlights
    - Display product variants if available
    - Add "Contact Us to Purchase" button linking to contact page with pre-filled subject
    - Add "Add to Compare" button
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 7.1, 7.2_

  - [ ]\* 9.2 Write property test for product detail display

    - **Property 2: Product detail page displays complete information**
    - **Validates: Requirements 2.1, 2.2**

  - [ ]\* 9.3 Write property test for product highlights

    - **Property 4: Product highlights are displayed**
    - **Validates: Requirements 2.4**

  - [ ]\* 9.4 Write property test for product variants

    - **Property 5: Product variants are displayed**
    - **Validates: Requirements 2.5**

  - [ ]\* 9.5 Write unit tests for ProductDetailPage
    - Test navigation to contact page with product context
    - Test add to comparison functionality
    - _Requirements: 7.1, 7.2_

- [x] 10. Build ComparisonPage

  - [x] 10.1 Create ComparisonTable component

    - Display up to 3 products in columns
    - Show specifications in aligned rows
    - Highlight differences between products
    - Add remove product buttons
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

  - [ ]\* 10.2 Write property test for comparison display

    - **Property 7: Comparison displays products side-by-side**
    - **Validates: Requirements 3.2**

  - [ ]\* 10.3 Write property test for specification alignment

    - **Property 8: Comparison specifications aligned in rows**
    - **Validates: Requirements 3.3**

  - [ ]\* 10.4 Write property test for highlighting differences

    - **Property 9: Comparison highlights differences**
    - **Validates: Requirements 3.4**

  - [x] 10.5 Create ComparisonPage component

    - Integrate ComparisonTable
    - Handle empty comparison state
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]\* 10.6 Write unit tests for ComparisonPage
    - Test empty comparison message
    - Test comparison limit message
    - _Requirements: 3.1_

- [-] 11. Build blog functionality

  - [x] 11.1 Create ArticleCard component

    - Display article title, excerpt, publication date, featured image
    - Show author information
    - _Requirements: 12.2_

  - [ ]\* 11.2 Write property test for article card display

    - **Property 21: Article card displays all required fields**
    - **Validates: Requirements 12.2**

  - [x] 11.3 Create BlogPage component

    - Display list of ArticleCard components
    - Handle empty blog state
    - _Requirements: 12.1, 12.2, 12.5_

  - [ ]\* 11.4 Write unit tests for BlogPage

    - Test article list renders
    - Test empty blog message
    - _Requirements: 12.1_

  - [x] 11.5 Create ArticleContent component

    - Render formatted article content
    - Display images within content
    - Show metadata (author, date, reading time)
    - _Requirements: 12.4_

  - [x] 11.6 Create ArticleDetailPage component

    - Integrate ArticleContent component
    - Handle invalid article IDs
    - _Requirements: 12.3, 12.4_

  - [ ]\* 11.7 Write property test for article detail display

    - **Property 22: Article detail page displays complete information**
    - **Validates: Requirements 12.4**

  - [ ]\* 11.8 Write unit tests for ArticleDetailPage
    - Test article not found handling
    - Test navigation from article card
    - _Requirements: 12.3_

- [x] 12. Build contact functionality

  - [x] 12.1 Create ContactForm component

    - Implement form fields (name, email, subject, message)
    - Support initialSubject prop for pre-filled inquiries
    - Implement form validation
    - Display error messages for invalid fields
    - Show success message on submission
    - _Requirements: 5.1, 5.2, 5.5, 7.3, 7.4_

  - [ ]\* 12.2 Write property test for form validation

    - **Property 11: Contact form validation catches missing fields**
    - **Validates: Requirements 5.2**

  - [ ]\* 12.3 Write property test for error messages

    - **Property 12: Contact form displays error messages**
    - **Validates: Requirements 5.5**

  - [ ]\* 12.4 Write property test for pre-filled subject

    - **Property 17: Contact form pre-fills product inquiry**
    - **Validates: Requirements 7.3, 7.4**

  - [x] 12.5 Create ContactPage component

    - Integrate ContactForm component
    - Display contact information and social links
    - Handle query parameters for product inquiries
    - _Requirements: 5.1, 5.3, 5.4, 7.2, 7.3_

  - [ ]\* 12.6 Write unit tests for ContactPage
    - Test form submission
    - Test pre-filled subject from query params
    - Test success message display
    - _Requirements: 5.3, 7.2, 7.3_

- [x] 13. Build AboutPage

  - [x] 13.1 Create AboutPage component

    - Display brand story and mission
    - Show company values and philosophy
    - Include social media links
    - _Requirements: 4.1, 4.2, 4.4, 4.5_

  - [ ]\* 13.2 Write unit tests for AboutPage
    - Test content renders
    - Test social media links present
    - _Requirements: 4.1, 4.5_

- [x] 14. Set up routing and App component

  - [x] 14.1 Configure React Router

    - Set up routes for all pages
    - Implement route parameters for product and article IDs
    - Handle query parameters for contact page
    - _Requirements: 1.3, 9.2, 9.3_

  - [x] 14.2 Create App component

    - Wrap application with Context providers (Product, Article, Comparison)
    - Integrate Navigation component
    - Set up routing structure
    - _Requirements: All_

  - [ ]\* 14.3 Write integration tests for routing
    - Test navigation between pages
    - Test route parameters
    - Test query parameters
    - _Requirements: 1.3, 9.2, 9.3_

- [x] 15. Implement responsive design

  - [x] 15.1 Create responsive styles

    - Implement mobile-first CSS
    - Add media queries for tablet and desktop
    - Style hamburger menu for mobile navigation
    - Ensure touch-friendly button sizes
    - Implement responsive product grid columns
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ]\* 15.2 Write unit tests for responsive components
    - Test mobile menu toggle
    - Test grid column adjustments
    - _Requirements: 8.2, 8.3_

- [x] 16. Add error handling and edge cases

  - [x] 16.1 Implement error boundaries

    - Create error boundary component
    - Handle component errors gracefully
    - Display user-friendly error messages
    - _Requirements: All_

  - [x] 16.2 Add loading states

    - Implement loading indicators for data fetching
    - Handle empty states (no products, no articles, empty comparison)
    - _Requirements: All_

  - [ ]\* 16.3 Write unit tests for error handling
    - Test invalid product IDs
    - Test invalid article IDs
    - Test empty states
    - _Requirements: All_

- [x] 17. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
