const users =[]

function addUser(user){
    users.push(user)
    return users.find(user => user.id === id)
}

function deleteUser(id){
    const index = users.findIndex(user => user.id === id)
    if (index !== -1){
        return users.splice(index, 1)[0]
    }
    return null
}
