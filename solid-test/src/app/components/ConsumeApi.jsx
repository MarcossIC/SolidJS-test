import {
  createSignal,
  createResource,
  createMemo,
  onCleanup,
  createEffect,
  Switch,
  Match,
} from "solid-js";
import styles from "../App.module.css";

/* A way to fetch an API */
const ryckAndMortAPI = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return data.results;
};

const fetchRyckAndMortyAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((json) => json.results);
};

const ConsumeAPI = (props) => {
  /* 
  const [data, setValue] = createSignal(null);
  const fetchData = async () => {
    try {
      const ryckAndMortResponse = await ryckAndMortAPI();
      setValue(ryckAndMortResponse);
    } catch (ex) {
      console.log("Ha ocurrido un error", ex);
    }
  };
  fetchData();
  onCleanup(() => {
    ryckAndMortAPI();
  });*/

  const [data, { mutate, refetch }] = createResource(fetchRyckAndMortyAPI, {
    initialValue: [],
  });

  return (
    <>
      <h2 class={styles.title}>Consume API</h2>

      <ul role="list" class={styles.cards}>
        <Switch fallback={<div>Loading...</div>}>
          <Match when={data.error}>
            <div>Opps, Ha ocurrido un error...</div>
          </Match>
          <Match when={data}>
            <For each={data()}>
              {(character) => {
                return (
                  <li key={character.id} role="listitem" class={styles.card}>
                    <h3 class={styles.titleCard}>{character.name}</h3>
                    <picture>
                      <img
                        src={character.image}
                        loading="lazy"
                        role="img"
                        itemProp="image"
                      ></img>
                    </picture>
                  </li>
                );
              }}
            </For>
          </Match>
        </Switch>
      </ul>
    </>
  );
};

export default ConsumeAPI;
