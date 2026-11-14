import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import ProductPageSkeleton from "../../skeletons/ProductPageSkeleton";
import { useRouter } from "expo-router";
import { Product } from "@/types/types";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function Index() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  if (!products) {
    return <ProductPageSkeleton />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={products}
      getItemLayout={(data, index) => ({
        length: windowHeight * 0.3,
        offset: windowHeight * 0.3 * index,
        index,
      })}
      initialNumToRender={5}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          style={styles.listItem}
          onPress={() => router.push(`/details/${item.id}`)}
        >
          <Image source={item.image} style={styles.image} />
          <Text key={item.id} style={styles.listTitle}>
            {item.title}
          </Text>
          <Text>${item.price}</Text>
          <Text>{item.description}</Text>
          <Text>Category: {item.category}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  listItem: {
    width: windowWidth * 0.9,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

{
  /* <ScrollView
      contentContainerStyle={styles.container}
      horizontal={false}
      pagingEnabled={false}
    >
      {products.map((product) => (
        <Pressable style={styles.listItem} key={product.id}>
          <Image source={product.image} style={styles.image} />
          <Text key={product.id} style={styles.listTitle}>
            {product.title}
          </Text>
          <Text>${product.price}</Text>
          <Text>{product.description}</Text>
          <Text>Category: {product.category}</Text>
        </Pressable>
      ))}
    </ScrollView> */
}
