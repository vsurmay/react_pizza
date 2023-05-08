import React, { useState } from "react";
import classes from "./PizzaForm.module.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SwitchOption from "../../SwitchOption/SwitchOption";
import { useDispatch } from "react-redux";
import validate from "./validate";
import categories from "../../../assets/categories";
import { adedPizza } from "../../../redux/slices/pizzaSlice";

const PizzaForm = () => {
  const dispatch = useDispatch();

  const [activeTypes, setActiveTypes] = useState([0, 1]);
  const [activeSizes, setActiveSizes] = useState([26, 30, 40]);
  const [activeCategory, setActiveCategory] = useState([categories[0].key]);

  console.log(activeCategory);

  const handleClickType = (value) => {
    if (activeTypes && activeTypes.includes(value)) {
      setActiveTypes(activeTypes.filter((el) => el !== value));
    } else {
      setActiveTypes([...activeTypes, value]);
    }
  };
  const handleClickSize = (value) => {
    if (activeSizes && activeSizes.includes(value)) {
      setActiveSizes(activeSizes.filter((el) => el !== value));
    } else {
      setActiveSizes([...activeSizes, value]);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          image: "",
          price: 0,
          rating: 5,
        }}
        validate={validate}
        onSubmit={(values) => {
          dispatch(
            adedPizza({
              ...values,
              pizzaType: activeTypes,
              pizzaSize: activeSizes,
              category: activeCategory,
            })
          );

          console.log({
            ...values,
            pizzaType: activeTypes,
            pizzaSize: activeSizes,
            category: activeCategory,
          });
          // dispatch(
          //   addPizza({
          //     ...values,
          //     pizzaType: activeTypes,
          //     pizzaSize: activeSizes,
          //     category: activeCategory,
          //   })
          // );
          // console.log({
          //   ...values,
          //   pizzaType: activeTypes,
          //   pizzaSize: activeSizes,
          //   category: activeCategory,
          // });
        }}
      >
        <Form className={classes.form}>
          <label className={classes.label}>
            <p>Name</p>
            <Field className={classes.input} name="name" placeholder="Name" />
          </label>
          <ErrorMessage
            className={classes.error}
            name={"name"}
            component={"div"}
          />
          <label className={classes.label}>
            <p>Image</p>
            <Field className={classes.input} name="image" placeholder="Image" />
          </label>
          <label className={classes.label}>
            <p>Price</p>
            <Field
              type="number"
              className={classes.input}
              name="price"
              placeholder="Price"
            />
          </label>
          <ErrorMessage
            className={classes.error}
            name="price"
            component={"div"}
          />
          <label className={classes.label}>
            <p>Rating</p>
            <Field
              type="number"
              className={classes.input}
              name="rating"
              placeholder="Rating"
            />
          </label>
          <ErrorMessage
            className={classes.error}
            name="rating"
            component={"div"}
          />
          <SwitchOption
            form={true}
            handleClickType={handleClickType}
            activeTypes={activeTypes}
            handleClickSize={handleClickSize}
            activeSizes={activeSizes}
          />
          <ul className={classes.list}>
            {categories
              .filter((el) => el.key !== "all")
              .map((categ) => (
                <li
                  onClick={() => {
                    if (activeCategory.includes(categ.key)) {
                      setActiveCategory(
                        activeCategory.filter((el) => el !== categ.key)
                      );
                    } else {
                      setActiveCategory([...activeCategory, categ.key]);
                    }
                  }}
                  className={`${classes.item} ${
                    activeCategory.includes(categ.key) && classes.active
                  }`}
                  key={categ.key}
                >
                  {categ.label}
                </li>
              ))}
          </ul>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default PizzaForm;
