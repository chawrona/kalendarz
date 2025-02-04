export default function getNewMonth(prevDate, direction) {
    switch (direction) {
        case "next":
            if (prevDate.getMonth() == 11) {
                return new Date(prevDate.getFullYear() + 1, 0, 1)
            }
            return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);

        case "prev":
            if (prevDate.getMonth() == 0) {
                return new Date(prevDate.getFullYear() + -1, 11, 1)
            }
            return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1); 

        case "reset":
        default:
            return new Date();
    }
}