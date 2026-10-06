import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export default function App() {
  const [postList, setPostList] = useState<Post[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [postTitle, setPostTitle] = useState("");

  const [postBody, setPostBody] = useState("");

  const [isPosting, setisPosting] = useState(false);

  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );

      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
      setError("Failed to fetch Post List");
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setisPosting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        },
      );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setisPosting(false);
      setError("");
    } catch (error) {
      console.error("Error adding New Post:", error);
      setError("Failed to add new post ");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
  <SafeAreaView style={styles.container}>
  {error ? (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  ) : (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Post title"
          value={postTitle}
          onChangeText={setPostTitle}
        />

        <TextInput
          style={styles.input}
          placeholder="Post body"
          value={postBody}
          onChangeText={setPostBody}
        />

        <Button
          title={isPosting ? "Adding..." : "Add Post"}
          onPress={addPost}
          disabled={isPosting}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          ListEmptyComponent={<Text>No posts available</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>Posts</Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>End of List</Text>
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
    </>
  )}
</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98cddd",
    paddingTop: 10,
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#070505",
    marginBottom: 16,
  },

  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  bodyText: {
    fontSize: 18,
    color: "#666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },

  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#7babb9",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },

  errorContainer: {
    backgroundColor: "#FFCOCB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },

  errorText: {
    color: "#D80oocC",
    fontSize: 16,
    textAlign: "center",
  },
});
