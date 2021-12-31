const { Router } = require("express");
const form = require("../models/Form");
const router = Router();

//create record on mongoDB
router.post("/", (request, response) => {
  const newForm = new form.model(request.body);
  newForm.save((err, form) => {
    return err ? response.sendStatus(500).json(err) : response.json(form);
  });
});

//get the records to show on insomnia
router.get("/", (request, response) => {
  form.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

//find a record by its ID
router.get("/:id", (request, response) => {
  form.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

//delete a record
router.delete("/:id", (request, response) => {
  form.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

//update a record
router.put("/:id", (request, response) => {
  const body = request.body;
  form.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        phone: body.phone,
        address: body.address,
        email: body.email
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    }
  );
});

module.exports = router;
