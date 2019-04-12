/**
 * users
 *      id
 *      username
 *      fullname
 *      phone
 * roles
 *      id
 *      user_id
 *      
 * users {
 *      id
 *      username
 *      fullname
 *      phone
 *      roles [
 *          {id:1}
 *          {id:2, name:...}
 *      ]
 * }
 * 
 * sql
 * users 
 *  id:1
 *  username: abc
 *  pass: 12345
 *  phone: null
 *  address: null
 * 
 *  id:2
 *  username: abc
 *  pass: 12345
 *  phone:12234
 *  address:1234
 * 
 * 
 * 
 */