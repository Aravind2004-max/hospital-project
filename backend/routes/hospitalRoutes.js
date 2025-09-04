const exp = require("express");
const router = exp.Router();
const hospitalController = require("../controllers/hospitalController");

//routing to correct end points
router.get("/patientDetails",hospitalController.getDetails);
router.post("/admission",hospitalController.insertDetails);
router.put("/admission/update",hospitalController.updateDetails);
router.delete("/discharge/:id",hospitalController.deleteDetails);

module.exports = router;