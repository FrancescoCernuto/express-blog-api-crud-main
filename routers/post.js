const express = require("express")
const router = express.Router();

module.exports = router;

/* Index */
router.get("/", (req, res) => {
    res.send("Lista dei post");
  });
  
  /* Show */
  router.get("/:view", (req, res) => {
    res.send("Visualizza il post");
  });
  
  /* Create */
  router.post("/", (req, res) => {
    res.send("Crea il post");
  });
  
  /* Update */
  router.put("/:update", (req, res) => {
    res.send("Modifica completamente il post");
  });
  
  /* Modify */
  router.patch("/:modify", (req, res) => {
    res.send("Modifica parzialmente il post");
  });
  
  /* Delete */
  router.delete("/destroy", (req, res) => {
    res.send("Cancellazione del post");
  });