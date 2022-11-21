const todoList = () => {
    all = []
    const add = (todoItem) => {
        all.push(todoItem)
    }
    const markAsComplete = (index) => {
        all[index].completed = true
    }

    const overdue = () => {
        // Write the date check condition here and return the array of overdue items accordingly.
        overdu = []

        for (let i = 0; i < all.length; i++) {
            if (all[i]['dueDate'] == yesterday) {
                s = "[ ] "
                if (all[i]['completed'] == true) {
                    s = "[x] "
                }
                overdu.push(s + all[i]['title'] + " " + yesterday)

            }
        }

        return overdu
    }

    const dueToday = () => {
        overdu = []
        for (let i = 0; i < all.length; i++) {
            if (all[i]['dueDate'] == today) {
                s = "[ ] "
                if (all[i]['completed'] == true) {
                    s = "[x] "
                }
                overdu.push(s + all[i]['title'])
            }
        }
        return overdu
    }

    const dueLater = () => {
        overdu = []
        for (let i = 0; i < all.length; i++) {
            if (all[i]['dueDate'] == tomorrow) {
                s = "[ ] "
                if (all[i]['completed'] == true) {
                    s = "[x] "
                }
                overdu.push(s + all[i]['title'] + " " + tomorrow)
            }
        }
        return overdu
    }

    const toDisplayableList = (list) => {
        // Format the To-Do list her
        let finalRes = list.join("\n")

        return finalRes
    }

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")