'use strict';

import {Router} from 'express';
import User from '../../models/User'
/**
 * Setting up authentication routes
 */
var router = Router();

router.get("/:UserId",  (req, res, next) => { 
  const id = req.params.UserId;
  User.findById(id)
    .exec()
    .then(doc => {
      console.log("from database", doc);
      if(doc){
        res.status(200).json(doc);
      } else
      {
        res.status(404).json({message: 'No valid entry found for provided ID'})
      }
    })
    .catch(err => {console.log(err)
      res.status(500).json({error: err})
      });
});

module.exports = router;