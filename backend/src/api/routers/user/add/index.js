import express from 'express'
import {email} from "./email";
import {password} from "./password";
import {User} from "../models";
import {intra} from "./intra";
import {github} from "./github";

export const addRouter = express.Router();

addRouter.route('/email').post(email);

addRouter.route('/password').post(password);

addRouter.route('/intra').post(intra(User));

addRouter.route('/github').post(github(User));
