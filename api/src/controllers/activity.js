const { Op } = require("sequelize");
const { Country, Tourist_Activity } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;
  if (name && difficulty && duration && season && countryId) {
    Tourist_Activity.create({
      name,
      difficulty,
      duration,
      season,
    })
      .then((createAct) => {
        createAct.addCountry(countryId);
        return res.json({ message: "Actividad creada" });
      })
      .catch((error) => {
        throw new Error(error);
      });
  } else {
    alert(error, "Please enter all required fields");
  }
};

const getActivity = async (req, res) => {
  let { activity } = req.query;
  let countries;
  if (activity) {
    activity = activity.toLowerCase();
    try {
      countries = await Country.findAll({
        include: [
          {
            model: Tourist_Activity,
            where: {
              [Op.or]: [
                {
                  name: {
                    [Op.iLike]: `%${activity}%`,
                  },
                },
              ],
            },
          },
        ],
      });
      if (countries.length) {
        res.send(countries);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).send("Activity no found");
  }
};

const getActivityAll = async (req, res) => {
  try {
    let activities = await Tourist_Activity.findAll();
    return res.send(activities);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postActivity,
  getActivity,
  getActivityAll,
};
