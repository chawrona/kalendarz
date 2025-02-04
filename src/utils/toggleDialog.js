export default function toggleDialog(dialogRef) {
    const dc = dialogRef.current
    if (!dc) return
    dc.hasAttribute("open") ? dc.close() : dc.showModal()
}