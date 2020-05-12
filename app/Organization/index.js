import Router from '../Base/Router';
import Organizer from '../Organizer/Organizer';
import Organization from './Organization';
import User from '../User/User';

const organizationRouter = new Router();

organizationRouter.get('/all', async (req, res) => {
  const organizations = await Organization.getAll();
  return res.status(200).send({ organizations });
});

organizationRouter.post('/create', async (req, res) => {
  const {
    description,
    name,
    logo,
  } = req.body;
  const { uuid } = req.payload

  try {
    const user = await User.getByUUID(uuid);
    const organization = await Organization.create({
      reputation: 0,
      description,
      name,
      logo,
    });

    const organizer = await Organizer.create({
      OrganizationId: organization.id,
      UserId: user.id,
      status: 1,
    });

    res.status(201).send({ organization });
  }
  catch(message) {
    console.log(message);
    res.status(400).send({ message });
  }
});

export {
  organizationRouter,
};
