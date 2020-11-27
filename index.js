var graph = require('fbgraph')

const access_token = process.env.ACCESS_TOKEN

const page_id = process.env.PAGE_ID

graph.setAccessToken(access_token)

// // get facebook page name
// graph.get(`${page_id}`, function(err, res) {
//   console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
// });

// // get facebook page icon
// var params = { fields: "picture" };

// graph.get(`${page_id}`, params,  function(err, res) {
//   console.log(res); // { picture: "http://profile.ak.fbcdn.net/..." }
// });

// // get facebook page icon, 只係顯示的係JSON
// graph.get(`/${page_id}/picture`, function(err, res) {
//   console.log(res); // { image: true, location: "http://profile.ak.fb..." }
// });

// get posts
graph.batch([
  // {
  //   method: "GET",
  //   relative_url: `${page_id}/posts` // All posts
  // },
  // {
  //   method: "GET",
  //   relative_url: `${page_id}/posts?limit=1` // New posts
  // },
  {
    method: "GET",
    relative_url: `${page_id}/posts?fields=full_picture,message,created_time&limit=3`
  },
], function(err, res) {
  // console.log(res)
  res.map(muti => {
    if(!muti.body) return console.log('無野可以比你拿')

    const parsePosts = JSON.parse(muti.body)
    const posts = parsePosts.data

    try{
      posts.map(result => {
        console.log('message:', result)
      })
    }catch(err){
      console.log("拿 MESSAGE 有問題", err)
    }
  })
})

