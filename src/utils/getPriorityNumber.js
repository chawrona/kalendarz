export default function getPriorityNumber(priority) { 
    return priority === "high" ? 3 : (priority === "medium" ? 2 : 1)
}