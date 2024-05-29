# ChangeLog

All notable changes to this project (Rithual-Reader-Next) will be documented in this file.

## 2024-3-15 [Samuel Almeida]

New additions to the Input.tsx file (chapter comment field) for the user.

### Added

- Comment submission compatible with the firestore document structure (unfinished)

## 2024-3-16 [Samuel Almeida]

New additions, one highlight to mention is a custom function created to handle less verbose firebase requests.

### Added

- Function created to get the current document id from firebase in the FirebaseDocumentChapterId.tsx file with less verbosity (will rename it later)
- Addition and deletion of comment likes
- Comment component created with the HTML of the comment to handle each element individually (editing, liking, deletion)

## 2024-3-17 [Samuel Almeida]

Correction

### Added

- Correction in the next.config.js file to change the reader subdomain's pathname

## 2024-3-18 [Samuel Almeida]

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

## 2024-3-23 [Eduardo Barbosa]

Added background image of Singer Faksumi in the home page, carousel and other information added in the HiddenDiv component.

### Added

- Background photo of Singer Faksumi in Home page component

- Information about chapters added in HiddenDiv component as well as carousel with all the chapter's pre pages

### Modified

- Replaces Flickity lib with SwiperJS for more flexibility and options

## 2024-4-08 [Eduardo Barbosa]

Refactored Comments component, cleaned unused code.

### Modified

- Refactores and cleaned Comment.tsx code, separating each main functionality into separated components, such as the Modal component and the Dropwdown.

## 2024-5-27 [Eduardo Barbosa]

Optimized code from important components for faster performance, loading when navigating for responsiveness, chapter likes, Modal warning for like button when not logged

### Added

- Likes for chapters almost 100% working by using the user's email for registring the like.

- Warning modal for when the user tries to like the chapter without being logged.

- Loading screen when the user is in Home Page and then tries to navigate to the chapters in ChapterNavigator.tsx

### Fixed

- Some code inconsistencies that were making the aplication slower.

- Now when the three dots in the footer are clicked, the representative image of the selected chapter will not load, it will be loaded previously.

- Pre pages of chapters in HiddenDiv are now pre-loaded

## 2024-5-28 [Eduardo Barbosa]

Likes working completely, loading page for profile component, loading animation for home page

### Added

- Loading screen with animations in GSAP and TYPEWRITER on Home page component

- Simple skeleton loading page for profile component

### Fixed

- Likes of chapters moved to context file so now each chapter's like is completely responsive and there is a loading state to the likes to enhance user experience
