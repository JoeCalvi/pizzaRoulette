namespace pizzaRoulette.Services;

public class AccountService
{
  private readonly AccountsRepository _repo;

  public AccountService(AccountsRepository repo)
  {
    _repo = repo;
  }

  internal Account GetProfileByEmail(string email)
  {
    return _repo.GetByEmail(email);
  }

  internal Account GetOrCreateProfile(Account userInfo)
  {
    Account profile = _repo.GetById(userInfo.Id);
    if (profile == null)
    {
      return _repo.Create(userInfo);
    }
    return profile;
  }

  internal Account Edit(Account editData, string userEmail)
  {
    Account original = GetProfileByEmail(userEmail);
    original.Name = editData.Name.Length > 0 ? editData.Name : original.Name;
    original.Picture = editData.Picture.Length > 0 ? editData.Picture : original.Picture;
    return _repo.Edit(original);
  }

    internal List<Favorite> GetMyFavorites()
    {
        List<Favorite> favorites = _repo.GetMyFavorites();
        return favorites;
    }

    internal Favorite GetFavoriteById(int favoriteId)
    {
      Favorite favorite = _repo.GetFavoriteById(favoriteId);
      return favorite;
    }

    internal string DeleteFavorite(string userId, int favoriteId)
    {
        Favorite favorite = this.GetFavoriteById(favoriteId);
        if(favorite.AccountId != userId) throw new Exception("This favorite does not belong to you.");
        _repo.DeleteFavorite(favoriteId);
        return "Favorite deleted.";
    }
}


