require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "evaslucifer",
  id: 190109720,
  node_id: "U_kgDOC1TYGA",
  avatar_url: "https://avatars.githubusercontent.com/u/190109720?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/evaslucifer",
  html_url: "https://github.com/evaslucifer",
  followers_url: "https://api.github.com/users/evaslucifer/followers",
  following_url:
    "https://api.github.com/users/evaslucifer/following{/other_user}",
  gists_url: "https://api.github.com/users/evaslucifer/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/evaslucifer/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/evaslucifer/subscriptions",
  organizations_url: "https://api.github.com/users/evaslucifer/orgs",
  repos_url: "https://api.github.com/users/evaslucifer/repos",
  events_url: "https://api.github.com/users/evaslucifer/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/evaslucifer/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Himanish rao ",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 11,
  public_gists: 0,
  followers: 1,
  following: 4,
  created_at: "2024-11-29T14:55:07Z",
  updated_at: "2026-06-28T07:29:15Z",
};
app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

app.get("/twitter", (req, res) => {
  res.send(`<h1>himanish@gmail.com</h>`);
});

app.get("/login", (req, res) => {
  res.send(`<h1>enter your login details</h1>`);
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
