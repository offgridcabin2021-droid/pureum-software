# Inventory App Features

## 1. Inventory (재고)

### Core Features
- **Item Management**
  - Add, edit, and delete inventory items
  - Search items by name, company, SKU, or category
  - Filter by company and category
  - View low stock items (search "low")
  - Admin-only: Add/Delete permissions

- **Item Details**
  - Basic info: Name, SKU, Company, Quantity, Unit
  - Multiple company support (separated by semicolons)
  - Category and location tracking
  - Purchase price tracking
  - Memo field for notes
  - Batch tracking with expiry dates
  - Stock threshold settings

- **Stock History**
  - Track all quantity changes with timestamps
  - View increase/decrease history
  - Return transactions tracking (negative quantities)
  - History filtering and display

- **Print Labels**
  - QR Code or Barcode generation
  - Multiple label formats (A4, Avery)
  - Configurable code size (small, medium, large)
  - Print single or batch items

- **Export to PDF**
  - Generate inventory reports
  - Email reports directly from app

### Display
- Company filter chips (horizontal scroll)
- Cards showing: Name, Company, Current stock, Low stock indicator
- Alert badge if item needs ordering
- Swipe to delete (admin only)

---

## 2. To Order (주문 필요)

### Core Features
- **Alert Management**
  - Auto-generated alerts for low stock items
  - Manual alert creation
  - Track ordering status by filter:
    - Needs Order (not yet ordered)
    - Backordered (partial delivery)
    - Ordered (fully ordered)

- **Order Tracking**
  - Mark items as "Ordered" with date
  - Record ordered quantity
  - Track backorder quantity
  - Add notes for each alert

- **Batch Operations**
  - Export all alerts to PDF
  - Share/email order list
  - Group by company for easy ordering

### Display
- Three status cards with counts:
  - Needs Order (orange)
  - Backordered (red)
  - Ordered (green)
- Filter by status (tap cards to filter)
- Grouped by company
- Search functionality
- Swipe to delete alerts

---

## 3. Scanner (스캐너)

### Core Features
- **QR/Barcode Scanning**
  - Real-time camera scanning
  - QR Code and Barcode support
  - Flashlight toggle for low light
  - Start/Stop scanning control

- **Quick Actions**
  - Scan to view item details
  - Auto-navigation to item page
  - Error handling for unknown codes

### Display
- Full-screen camera view
- Scanner frame with corner guides
- Bottom controls:
  - Flashlight toggle
  - Start/Stop button
  - Close button
- Empty state with "Start Scanning" button

---

## 4. Receiving (입고 / Stock Page)

### Core Features
- **Stock Check List**
  - View all ordered items awaiting receipt
  - Filter by:
    - All items
    - Ordered (regular orders)
    - Backordered items
  - Search by item name or company
  - Group by company

- **Stock Updates**
  - Update received quantity
  - Automatically updates inventory quantity
  - Creates stock history entry
  - One-tap full quantity receipt
  - Batch quantity adjustments

- **Invoice Management**
  - Take/upload invoice photos
  - Multiple items per invoice (batch selection mode)
  - View all invoices by tapping top-right icon
  - Filter invoices by:
    - Company
    - Year
    - Month
  - Delete individual or all invoices
  - Local storage with automatic organization (company/year/month)

- **Return Items**
  - Swipe left on stock items to return
  - Enter return quantity and reason
  - Decreases inventory quantity
  - Creates negative stock history entry
  - Removes from stock check list

### Display
- Two status cards:
  - Ordered count (blue)
  - Backordered count (red)
- Filter chips for selection
- Invoice selection mode toggle
- Grouped by company
- Each item shows: Name, Company, Ordered qty
- Swipe actions: Return item

---

## 5. Settings (설정)

### User Access
- Display user email and role (Owner/Assistant)
- Role-based permissions
- Clinic code display and sharing (for team access)
- Sign out

### Annual Archive (Admin Only)
- Archive all memos, stock history, and notes to PDF
- Automatic year-end archiving option
- Annual reset reminder notification (January 1st)
- View past archive records
- Download archived PDFs

### Customization (Admin Only)
- Low stock threshold settings
- Stock unit settings (default units)
- Display preferences

### Data Management (Admin Only)
- **CSV Import/Export**
  - Download CSV template
  - Import inventory from CSV
  - Guide for CSV formatting
  - AI check recommendation
  - Support for multiple companies (semicolon-separated)
  - Batch/expiry date support

- **Sample Data**
  - Add 12 basic items
  - Add 100/250/500 items for testing

- **Reset All Data**
  - Delete all inventory items
  - Delete all alerts
  - Delete all stock check items
  - Delete all invoices (both local and Firebase)
  - Delete cloud data (Firestore)
  - Cannot be undone

### Notifications (Admin Only)
- Enable/disable notifications
- Annual reminder settings
- Notification permissions management

### Reports (Admin Only)
- Monthly usage report
- Yearly summary report

### Label Configuration
- Code type: QR Code or Barcode
- Code size: Small, Medium, Large
- Paper format selection:
  - A4 2×5
  - A4 3×6
  - A4 4×8
  - Avery 5160
  - Avery 5163
  - Avery 5167
- Live preview of selected configuration

### Batch Print Labels
- Print labels for multiple items at once
- Select items and format
- Generate printable PDF

### Legal
- Privacy Policy
- Terms of Service

### About
- App version and build number
- Total items count
- Show intro/onboarding

---

## Key Features Summary

### Authentication & Permissions
- Email/password login
- Role-based access (Owner/Assistant)
- Clinic code sharing for team access

### Cloud Sync
- Firebase/Firestore integration
- Real-time data synchronization
- Cloud backup for invoices
- Multi-device support

### Batch Operations
- Expiry date tracking by batch
- FIFO (First-In-First-Out) usage
- Individual batch management

### Search & Filter
- Global search across all sections
- Company-based filtering
- Category filtering
- Status-based filtering

### Reports & Export
- PDF generation for inventory, alerts
- Email integration
- CSV import/export
- Annual archive system

### Notifications
- Low stock alerts
- Annual reset reminders
- Customizable notification settings
