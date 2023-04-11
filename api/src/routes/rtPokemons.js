const axios = require("axios");
const { Router } = require("express");
const router = Router();

// router.get("/", (req, res) => {
//   try {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//       .then(r => r.json())
//       .then(rJSON => res.json(rJSON))
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// });

router.get("/", async (req, res) => {
  try {
    let response = await (await fetch("https://pokeapi.co/api/v2/pokemon")).json();
    res.json(response);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;