# ChangeLog

All notable changes to this project (Rithual-Reader-Next) will be documented in this file.

## 2023-3-15 [Samuel Almeida]

New additions to the Input.tsx file (chapter comment field) for the user.

### Added

- Comment submission compatible with the firestore document structure (unfinished)

## 2023-3-16 [Samuel Almeida]

New additions, one highlight to mention is a custom function created to handle less verbose firebase requests.

### Added

- Function created to get the current document id from firebase in the FirebaseDocumentChapterId.tsx file with less verbosity (will rename it later)
- Addition and deletion of comment likes
- Comment component created with the HTML of the comment to handle each element individually (editing, liking, deletion)

## 2023-3-17 [Samuel Almeida]

Correction

### Added

- Correction in the next.config.js file to change the reader subdomain's pathname

## 2023-3-18 [Samuel Almeida]

Correction, Addition

### Added

Comment editing added

### Fixed

Fixed comment likes

## 2024-3-19 [Eduardo Barbosa]

Changed the styles of comment component, showing the likes of the chapters and changing the title of the website depending on the chapter you are

### Fixed

- fixed comments styling as well as changed editing dots position
- prop (commentId: string) added to the deleteComment function on Comments/index.tsx
- Added correct props for Dropdown component vvvvvv

```javascript
/// Old
{user && user!.email == props.comment.email && <Dropdown />}

/// New
{user && user!.email == props.comment.email && (
    <Dropdown
        commentId={props.comment.id}
        setEditMode={setEditMode}
        setOpenModal={setOpenModal}
    />
)}
```

### Added

- Type alias for the Dropdown function added, Comments/index.tsx

```typescript
type DropdownProps = {
  commentId: string;
  setEditMode: (value: boolean) => void;
  setOpenModal: (value: boolean) => void;
};
```

- Dinamically updating website title when navegating through chapters
