import user from './user'
import staticPage from './static'
import activity from './activity'
console.log(...user)
export default [
   	...user,
    ...staticPage,
    ...activity
]