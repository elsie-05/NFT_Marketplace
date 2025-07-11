import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Principal } from "@dfinity/principal";

function Gallery(props) {
  const [items, setItems] = useState([]); // ✅ Safe default

  useEffect(() => {
    if (props.ids && props.ids.length > 0) {
      const newItems = props.ids.map((NFTId) => (
        <Item id={NFTId} key={NFTId.toText()} role={props.role} />
      ));
      setItems(newItems);
    }
  }, [props.ids]); // ✅ Updates when ids change

  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
            {items.length > 0 ? items : <p>No items to display</p>} {/* ✅ Safe fallback */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
