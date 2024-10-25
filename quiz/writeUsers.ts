import express, { Response } from 'express';
import fs from 'fs';
import path from 'path';
import { User, UserRequest } from './types';

const router = express.Router()
const savefile = path.join(__dirname, '../data/users.json');

let users: User[];

// Add new user to save file
router.post('/write/adduser', (req: UserRequest, res: Response) => {
    let newuser = req.body as User;
    users.push(newuser);
    fs.writeFile(path.resolve(__dirname, savefile), JSON.stringify(users), (err) => {
      if (err) console.log('Failed to save');
      else console.log('User Saved');
    });
    res.send('Done');
  });

export default router;