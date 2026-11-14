import { Product } from "@/types/types";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductDetailsSkeleton from "../../../skeletons/ProductDetailsSkeleton";

const index = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProductDetails = async (productId: string | number) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails(id as string | number);
  }, [id]);

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Product details are unavailable.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={product.image} style={styles.image} contentFit="contain" />
      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>★ {product.rating.rate.toFixed(1)}</Text>
          <Text style={styles.ratingCount}>
            ({product.rating.count} ratings)
          </Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 32,
    backgroundColor: "#f8fafc",
  },
  image: {
    width: "100%",
    height: 320,
    backgroundColor: "#f8fafc",
    marginTop: 16,
  },
  content: {
    padding: 20,
  },
  category: {
    color: "#64748b",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  title: {
    color: "#0f172a",
    fontSize: 26,
    fontWeight: "700",
    lineHeight: 32,
    marginTop: 8,
  },
  price: {
    color: "#2563eb",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
  },
  ratingRow: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },
  rating: {
    color: "#b45309",
    fontSize: 16,
    fontWeight: "700",
  },
  ratingCount: {
    color: "#64748b",
    fontSize: 14,
    marginLeft: 8,
  },
  description: {
    color: "#334155",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 24,
  },
  errorText: {
    color: "#475569",
    fontSize: 16,
  },
});
