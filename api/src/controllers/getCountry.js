const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Tourist_Activity } = require("../db");

const getCountriesByName = async (name) => {
  try {
    if (name) {
      countries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Tourist_Activity,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      return countries;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getCountries = async (req, res) => {
  let { name } = req.query;
  if (name) return res.json(await getCountriesByName(name));
  const check = await Country.findOne({ where: { id: "PER" } });
  if (check === null) {
    let apiCountries = await axios.get("https://restcountries.com/v3/all");
    let countries = apiCountries.data.map((element) => {
      return {
        id: element.cca3,
        name: element.name.common,
        flag: element.flags[1],
        continent: element.continents
          ? element.continents[0]
          : "Continents not found",
        capital: element.capital ? element.capital[0] : "Capital not found",
        subregion: element.subregion,
        area: Number(element.area),
        population: Number(element.population),
      };
    });
    await Country.bulkCreate(countries);
    const country = await Country.findAll({
      include: {
        model: Tourist_Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const countryClean = country.map((e) => {
      return {
        id: e.id,
        name: e.name,
        flag: e.flag,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
        Tourist_Activities: e.Tourist_Activities.map((e) => {
          return e.name;
        }),
      };
    });

    res.status(200).json(countryClean);
  } else {
    const country = await Country.findAll({
      include: {
        model: Tourist_Activity,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    const countryClean = country.map((e) => {
      return {
        id: e.id,
        name: e.name,
        flag: e.flag,
        continent: e.continent,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
        Tourist_Activities: e.Tourist_Activities.map((e) => {
          return e.name;
        }),
      };
    });
    res.status(200).json(countryClean);
  }
};

const getCountriesId = async (req, res) => {
  let { id } = req.params;
  if (id) {
    id = id.toUpperCase();
    const found = await Country.findByPk(id, {
      include: {
        model: Tourist_Activity,
        attributes: ["name", "difficulty", "duration", "season", "id"],
        through: {
          attributes: [],
        },
      },
    });
    res.status(200).json(found);
  } else {
    res.status(404).json({ message: "Country not found" });
  }
};

module.exports = {
  getCountries,
  getCountriesId,
  getCountriesByName,
};
